import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Palette({ palette }) {
  const colorBoxes = palette.colors[500].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <Slider />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
}

export default Palette;
