'use client';
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope, FaTimes, FaComments } from "react-icons/fa";
import "./ChatWidget.css";

const FloatingContactButtons = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleToggle = () => {
        if (isChatOpen) setIsChatOpen(false);
        setIsOpen(!isOpen);
    };

    const handleWhatsAppClick = () => {
        setIsChatOpen(!isChatOpen);
    };

    const iconVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }),
        exit: (i) => ({
            opacity: 0,
            y: 20,
            scale: 0.8,
            transition: {
                delay: i * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }),
    };

    const chatVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        exit: {
            opacity: 0,
            y: 20,
            scale: 0.95,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    return (
        <div className="chat-widget-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-icons"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {[FaWhatsapp, FaPhone, FaEnvelope].map((Icon, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={iconVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant={i === 2 ? "danger" : "success"}
                                    className="chat-button"
                                    onClick={
                                        i === 0
                                            ? handleWhatsAppClick
                                            : i === 1
                                                ? () => window.location.href = "tel:+918825850313"
                                                : () => window.location.href = "mailto:srakinas@gmail.com"
                                    }
                                >
                                    <Icon size={20} />
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button

                    className="chat-toggle"
                    onClick={handleToggle}
                >
                    {isOpen ? <FaTimes size={25} /> : <FaComments size={25} />}
                </Button>
            </motion.div>

            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        className="whatsapp-popup"
                        variants={chatVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="whatsapp-header">
                            <FaWhatsapp size={20} /> <span>Chat with us</span>
                            <motion.div
                                whileHover={{ rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaTimes size={20} onClick={handleWhatsAppClick} className="close-chat" />
                            </motion.div>
                        </div>
                        <div className="whatsapp-body">
                            <motion.div
                                className="whatsapp-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Praise the Lord, Welcome to CEA Church
                            </motion.div>
                            <motion.input
                                type="text"
                                placeholder="Write your message..."
                                className="whatsapp-input"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            />
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    className="whatsapp-send"
                                    onClick={() => window.open("https://wa.me/918825850313?text=Hello!", "_blank")}
                                >
                                    Send
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingContactButtons;
