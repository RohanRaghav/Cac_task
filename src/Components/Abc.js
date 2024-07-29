// src/HoverDestroyRestore.js

import React, { useState } from 'react';

const Abc = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const dots = [
        { left: 405, top: 200 },
        { left: 430, top: 145 },
        { left: 380, top: 165 },
        { left: 358, top: 235 },
        { left: 363, top: 250 },
        { left: 380, top: 145 },
        { left: 352, top: 252 },
        { left: 450, top: 200, offset: -60 },
        { left: 432, top: 152, offset: -60 },
        { left: 445, top: 152, offset: -60 },
        { left: 460, top: 152, offset: -60 },
        { left: 438, top: 200, offset: -60 },
        { left: 418, top: 245, offset: -60 },
        { left: 365, top: 245, offset: -60 },
        { left: 310, top: 245, offset: -60 },
        { left: 450, top: 200, offset: -100 },
        { left: 432, top: 150, offset: -100 },
        { left: 410, top: 245, offset: -100 },
        { left: 420, top: 190, offset: -100 },
        { left: 430, top: 225, offset: -100 },
        { left: 439, top: 245, offset: -100 },
        { left: 420, top: 200, offset: -100 },
        { left: 401, top: 150, offset: -100 },
        { left: 450, top: 200, offset: -120 },
        { left: 432, top: 150, offset: -120 },
        { left: 410, top: 245, offset: -120 },
        { left: 420, top: 190, offset: -120 },
        { left: 430, top: 225, offset: -120 },
    ];

    return (
        <div
            className="content-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {dots.map((dot, index) => (
                <span
                    key={index}
                    className={`dot ${isHovered ? 'destroyed' : ''}`}
                    style={{
                        left: dot.left + (dot.offset || 0),
                        top: dot.top,
                        position: 'relative',
                        '--x': `${Math.random() * 200 - 100}px`,
                        '--y': `${Math.random() * 200 - 100}px`,
                    }}
                ></span>
            ))}
        </div>
    );
};

export default Abc;
