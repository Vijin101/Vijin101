"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import "./ListGallery.css";

const ListGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [imageSizes, setImageSizes] = useState({});
    const [visibleImages, setVisibleImages] = useState(new Set());
    const imageRef = useRef(null);
    const observerRef = useRef(null);

    // Function to get image dimensions
    const getImageDimensions = (src) => {
        return new Promise((resolve) => {
            const img = new window.Image();
            img.onload = () => {
                resolve({
                    width: img.width,
                    height: img.height,
                    aspectRatio: img.width / img.height
                });
            };
            img.src = src;
        });
    };

    // Load image dimensions on component mount
    useEffect(() => {
        const loadImageSizes = async () => {
            const sizes = {};
            for (const image of images) {
                const dimensions = await getImageDimensions(image.src);
                sizes[image.id] = dimensions;
            }
            setImageSizes(sizes);
        };
        loadImageSizes();
    }, [images]);

    // Setup Intersection Observer
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const imageId = entry.target.dataset.imageId;
                        setVisibleImages(prev => new Set([...prev, imageId]));
                        observerRef.current.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleClose = () => {
        setSelectedImage(null);
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
    };

    const handlePrevious = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.2, 3));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
    };

    const handleMouseDown = (e) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && zoomLevel > 1) {
            const newX = e.clientX - dragStart.x;
            const newY = e.clientY - dragStart.y;
            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="list-gallery">
            <div className="gallery-grid">
                {images.map((image, index) => {
                    const dimensions = imageSizes[image.id];
                    const isVisible = visibleImages.has(image.id.toString());
                    const style = dimensions ? {
                        gridRow: `span ${Math.ceil(dimensions.aspectRatio)}`,
                        gridColumn: `span ${Math.ceil(1 / dimensions.aspectRatio)}`
                    } : {};

                    return (
                        <div
                            key={image.id}
                            className="gallery-item"
                            onClick={() => handleImageClick(image, index)}
                            style={style}
                            data-image-id={image.id}
                            ref={el => {
                                if (el && observerRef.current && !isVisible) {
                                    observerRef.current.observe(el);
                                }
                            }}
                        >
                            <div className="image-container">
                                {isVisible ? (
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={dimensions?.width || 300}
                                        height={dimensions?.height || 200}
                                        className="gallery-image"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="image-placeholder" />
                                )}
                            </div>
                            <div className="image-overlay">
                                <span className="image-title">{image.alt}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Image Preview Modal */}
            {selectedImage && (
                <div className="preview-modal">
                    <div className="preview-content">
                        <button className="close-button" onClick={handleClose}>
                            <FaTimes />
                        </button>
                        <button className="nav-button prev" onClick={handlePrevious}>
                            <FaChevronLeft />
                        </button>
                        <div
                            className="preview-image-container"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            <div
                                ref={imageRef}
                                className="preview-image-wrapper"
                                style={{
                                    transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                                    cursor: zoomLevel > 1 ? 'grab' : 'default'
                                }}
                            >
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    width={800}
                                    height={600}
                                    className="preview-image"
                                    priority
                                />
                            </div>
                        </div>
                        <button className="nav-button next" onClick={handleNext}>
                            <FaChevronRight />
                        </button>
                        <div className="zoom-controls">
                            <button className="zoom-button" onClick={handleZoomIn}>
                                <FaSearchPlus />
                            </button>
                            <button className="zoom-button" onClick={handleZoomOut}>
                                <FaSearchMinus />
                            </button>
                        </div>
                        <div className="image-counter">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListGallery;
