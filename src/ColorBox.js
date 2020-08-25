import React from 'react';

function ColorBox({ background, name }) {
  return (
    <div style={{ backgroundColor: background }} className="ColorBox">
      <span> {name} MORE!</span>
    </div>
  );
}

export default ColorBox;
