import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';

const MiniPalette = memo(
  ({ classes, paletteName, id, emoji, colors, goToPalette, openDialog }) => {
    const deletePalette = (e) => {
      e.stopPropagation();
      openDialog(id);
    };

    const handleClick = () => {
      goToPalette(id);
    };

    const miniColorBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      />
    ));

    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.openDialog !== nextProps.openDialog
);

export default withStyles(styles)(MiniPalette);
