import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = memo(
  ({ classes, paletteName, id, emoji, colors, handleClick, openDialog }) => {
    const deletePalette = (e) => {
      e.stopPropagation();
      openDialog(id);
    };

    const miniColorBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      />
    ));
    console.log('RENDERING', paletteName);
    return (
      <div className={classes.root} onClick={() => handleClick(id)}>
        <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
);

export default withStyles(styles)(MiniPalette);
