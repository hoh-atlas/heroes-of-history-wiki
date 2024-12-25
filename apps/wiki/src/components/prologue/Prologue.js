import React from 'react';
import './Prologue.css';

const Prologue = ({ imageSrc, alt, maxHeight, children }) => {
  return (
    <div className="prologue-container">
      <div className="prologue-image">
        <img src={imageSrc} alt={alt} style={{ maxHeight: maxHeight }} />
      </div>
      <div className="prologue-content">
        {children}
      </div>
    </div>
  );
};

export default Prologue;
