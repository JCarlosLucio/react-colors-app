import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

function Palette({ palette }) {
  const colorBoxes = palette.colors[500].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
}

export default Palette;
