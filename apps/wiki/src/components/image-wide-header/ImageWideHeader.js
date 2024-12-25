import './ImageWideHeader.css';
import React from 'react';

const ImageWideHeader = ({
    imageUrl,
    style,
    centered,
    pulsate,
    spacing = false,
    styles = {}
}) => {
    const spacingStyles = spacing ? { marginTop: '20px', marginBottom: '20px' } : {};

    return (
        <div
            className={`wide-image-container ${centered ? 'centered' : ''} ${pulsate ? 'pulsate' : ''}`}
            style={{ ...style, ...styles, ...spacingStyles }}
        >
            <div
                className="image-wrapper"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
            </div>
        </div>
    );
};

export default ImageWideHeader;
