import React from 'react';
import './ColorBox.css';

function ColorBox({ background, name }) {
  return (
    <div style={{ background }} className="ColorBox">
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">COPY</button>
      </div>
      <span className="see-more">MORE</span>
    </div>
  );
}

export default ColorBox;
