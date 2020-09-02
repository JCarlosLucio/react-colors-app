import React from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {},
};

function PaletteList({ classes, palettes }) {
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map((palette) => <MiniPalette {...palette} />)}
    </div>
  );
}

export default withStyles(styles)(PaletteList);
