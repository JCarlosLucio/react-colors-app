import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer" />
    </div>
  );
}

export default Palette;
