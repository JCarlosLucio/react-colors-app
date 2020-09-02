import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {},
  colors: {},
  title: {},
  emoji: {},
};

function MiniPalette({ classes, paletteName, emoji, id, colors }) {
  return (
    <div className={classes.root}>
      <div className={classes.colors} />
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
