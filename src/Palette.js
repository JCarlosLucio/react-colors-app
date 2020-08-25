import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

function Palette({ id, paletteName, emoji, colors }) {
  const colorBoxes = colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
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
