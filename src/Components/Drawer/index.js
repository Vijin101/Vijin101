import React, { useEffect } from 'react';
import './Drawer.css';

const Drawer = ({ show, onHide, title, children, size = 'md', placement = 'end' }) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [show]);

    if (!show) return null;

    return (
        <>
            <div className="drawer-overlay" onClick={onHide} />
            <div className={`drawer-container drawer-${size} drawer-${placement} ${show ? 'show' : ''}`}>
                <div className="drawer-content">
                    <div className="drawer-header">
                        <h5 className="drawer-title">{title}</h5>
                        <button className="drawer-close" onClick={onHide}>
                            ×
                        </button>
                    </div>
                    <div className="drawer-body">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drawer; 