'use client';
import './CustomCursor.css';
import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHighlighting, setIsHighlighting] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (start, end, t) => {
      return start * (1 - t) + end * t;
    };

    const updateCursorPosition = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.4);
      currentY = lerp(currentY, targetY, 0.4);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      setIsHighlighting(true);
    };

    const handleMouseUp = () => {
      setIsHighlighting(false);
    };

    // Start animation loop
    animate();

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('wheel', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('wheel', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHighlighting ? 'highlight' : ''}`}
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CustomCursor;
