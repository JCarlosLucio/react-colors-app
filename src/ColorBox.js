import React from 'react';
import './ColorBox.css';

function ColorBox({ background, name }) {
  return (
    <div style={{ backgroundColor: background }} className="ColorBox">
      <span> {name} MORE!</span>
    </div>
  );
}

export default ColorBox;
