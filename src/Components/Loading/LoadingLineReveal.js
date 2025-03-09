"use client"; // Required for Next.js App Router

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingLineReveal = ({ children, delay = 0 }) => {
    const controlsTop = useAnimation();
    const controlsBottom = useAnimation();
    const [isVisible, setIsVisible] = useState(true); // Track visibility of split-screen elements

    useEffect(() => {
        // Start the animation after a delay
        const timer = setTimeout(() => {
            controlsTop.start({
                y: '-100%', // Slide the top part up
                transition: { duration: 1.5, ease: 'easeInOut' },
            });
            controlsBottom.start({
                y: '100%', // Slide the bottom part down
                transition: { duration: 1.5, ease: 'easeInOut' },
            }).then(() => {
                // After the animation completes, hide the split-screen elements
                setIsVisible(false);
            });
        }, delay * 1000); // Convert delay to milliseconds

        return () => clearTimeout(timer); // Cleanup timer
    }, [controlsTop, controlsBottom, delay]);

    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
            {/* Top Part */}
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }} // Start at the original position
                    animate={controlsTop} // Animate to slide up
                    style={{
                        position: 'fixed', // Use fixed positioning
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '50%', // Cover the top half of the screen
                        background: 'linear-gradient(to bottom, #000, #333)', // Gradient for the top part
                        zIndex: 10, // Ensure it's above the content
                    }}
                />
            )}

            {/* Bottom Part */}
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }} // Start at the original position
                    animate={controlsBottom} // Animate to slide down
                    style={{
                        position: 'fixed', // Use fixed positioning
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '50%', // Cover the bottom half of the screen
                        background: 'linear-gradient(to top, #000, #333)', // Gradient for the bottom part
                        zIndex: 10, // Ensure it's above the content
                    }}
                />
            )}

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, width: '100%', minHeight: '100vh' }}>
                {children}
            </div>
        </div>
    );
};

export default LoadingLineReveal;