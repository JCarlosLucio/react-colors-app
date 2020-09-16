import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

function PaletteFooter({ paletteName, emoji }) {
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
