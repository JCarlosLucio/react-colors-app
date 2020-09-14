import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      key={color.id}
      background={color[format]}
      name={color.name}
      moreUrl={`/palette/${palette.id}/${color.id}`}
      showingFullPalette
    />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
        showingAllColors
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default Palette;
