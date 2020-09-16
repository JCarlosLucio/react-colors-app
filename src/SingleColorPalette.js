import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteStyles';

const gatherShades = (palette, colorId) => {
  const shades = [];
  const allColors = palette.colors;
  for (const key in allColors) {
    shades.push(allColors[key].find((color) => color.id === colorId));
  }
  return shades.slice(1);
};

function SingleColorPalette({ palette, colorId, classes }) {
  const [format, setFormat] = useState('hex');
  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color.name}
      background={color[format]}
      name={color.name}
      showingFullPalette={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar format={format} setFormat={setFormat} showingAllColors={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>GO BACK</Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
