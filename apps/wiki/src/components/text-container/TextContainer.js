import './TextContainer.css';
import React, { useState, useEffect } from 'react';
import H1 from '../h1/H1';

const TextContainer = ({
    centered,
    headerTexts = [],
    texts = [],
    imageUrls = [],
    links,
    style,
    textRectangleHeight,
    pulsate,
    autoSlideSeconds
}) => {
    const length = Math.max(headerTexts.length, texts.length, imageUrls.length);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(true);
    const [autoSlide, setAutoSlide] = useState(true);

    const hasMultipleItems = length > 1;

    const validIndex = (length > 0) ? currentIndex % length : 0;

    const currentLink = Array.isArray(links) ? links[validIndex] : links;

    const prevSlide = () => {
        setShowText(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
        }, 500);
        resetAutoSlide();
    };

    const nextSlide = () => {
        setShowText(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
        }, 500);
        resetAutoSlide();
    };

    const resetAutoSlide = () => {
        if (hasMultipleItems && autoSlideSeconds) {
            setAutoSlide(true);
        }
    };

    useEffect(() => {
        setShowText(true);
    }, [currentIndex]);

    useEffect(() => {
        let slideInterval;
        if (hasMultipleItems && autoSlideSeconds) {
            slideInterval = setInterval(() => {
                if (autoSlide) {
                    nextSlide();
                }
            }, autoSlideSeconds * 1000);
        }

        return () => clearInterval(slideInterval);
    }, [autoSlide, currentIndex, hasMultipleItems, autoSlideSeconds]);

    const currentHeaderText = headerTexts[validIndex] || '';
    const currentText = texts[validIndex] || '';
    const currentImageUrl = imageUrls[validIndex] || '';

    const content = (
        <div
            className={`intro-container ${centered ? 'centered' : ''} ${pulsate ? 'pulsate' : ''}`}
            style={style}
            onMouseEnter={() => setAutoSlide(false)}
            onMouseLeave={() => resetAutoSlide()}
        >
            <div className="intro-heading-wrapper">
                <H1 className="intro-heading" style={{ color: 'white' }}>
                    {currentHeaderText}
                </H1>
            </div>
            <div className="intro-text-wrapper" style={{ backgroundImage: `url(${currentImageUrl})`, height: textRectangleHeight }}>
                <div className="intro-text-container">
                    <p className={`intro-text ${showText ? 'show' : ''}`}>
                        {currentText}
                    </p>
                </div>
                {hasMultipleItems && (
                    <>
                        <button className="slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">
                            &lt;
                        </button>
                        <button className="slider-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">
                            &gt;
                        </button>
                    </>
                )}
            </div>
        </div>
    );

    return currentLink ? (
        <a href={currentLink} className='text-link-white' style={{ textDecoration: 'none' }} rel="noopener noreferrer">
            {content}
        </a>
    ) : (
        content
    );
}

export default TextContainer;
