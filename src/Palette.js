import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';
import './Palette.css';

const styles = {
  Palette: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  colors: {
    height: '90%',
  },
};

function Palette({ palette, classes }) {
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
    <div className={classes.Palette}>
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
        showingAllColors
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
