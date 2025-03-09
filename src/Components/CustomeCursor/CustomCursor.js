'use client';
import './CustomCursor.css';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({
        x: e.clientX - 10,
        y: e.clientY + window.scrollY - (window.scrollY === 0 ? 90 : 10), // Add the scroll position
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('wheel', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('wheel', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        // left: cursorPosition.x,
        // top: cursorPosition.y,
        transition: 'transform 0.1s ease-out',
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
    ></div>
  );
};

export default CustomCursor;
