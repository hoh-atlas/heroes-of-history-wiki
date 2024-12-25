import React from 'react';
import './H1.css';

const H1 = ({ children, center, style }) => {
    const classNames = center ? 'custom-h1 center' : 'custom-h1';
    return (
        <h3 className={classNames} style={style}>
            {children}
        </h3>
    );
}

export default H1;