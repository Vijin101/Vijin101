"use client"; // Required for Next.js App Router

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingLineReveal = ({ children, delay = 0 }) => {
    const controlsTop = useAnimation();
    const controlsBottom = useAnimation();
    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            controlsTop.start({
                y: '-100%',
                transition: {
                    duration: isMobile ? 1 : 1.2,
                    ease: [0.4, 0, 0.2, 1],
                    delay: isMobile ? 0.1 : 0.2
                },
            });
            controlsBottom.start({
                y: '100%',
                transition: {
                    duration: isMobile ? 1 : 1.2,
                    ease: [0.4, 0, 0.2, 1],
                    delay: isMobile ? 0.1 : 0.2
                },
            }).then(() => {
                setIsVisible(false);
            });
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [controlsTop, controlsBottom, delay, isMobile]);

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            minHeight: isMobile ? '100dvh' : '100vh',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-main)'
        }}>
            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                minHeight: isMobile ? '100dvh' : '100vh',
                backgroundColor: 'var(--bg-main)',
                transition: 'opacity 0.5s ease-in-out',
                opacity: isVisible ? 0.3 : 1,
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
            }}>
                {children}
            </div>

            {/* Top Part */}
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    animate={controlsTop}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: `linear-gradient(180deg, var(--primary-dark) 0%, var(--primary-color) 100%)`,
                        zIndex: 10,
                        boxShadow: isMobile ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        willChange: 'transform',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, var(--secondary-color), transparent)',
                        }
                    }}
                />
            )}

            {/* Bottom Part */}
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    animate={controlsBottom}
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: `linear-gradient(0deg, var(--primary-dark) 0%, var(--primary-color) 100%)`,
                        zIndex: 10,
                        boxShadow: isMobile ? '0 -2px 10px rgba(0, 0, 0, 0.1)' : '0 -4px 20px rgba(0, 0, 0, 0.1)',
                        willChange: 'transform',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, var(--secondary-color), transparent)',
                        }
                    }}
                />
            )}
        </div>
    );
};

export default LoadingLineReveal;