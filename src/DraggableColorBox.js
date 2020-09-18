import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

function DraggableColorBox({ color }) {
  return <div style={{ backgroundColor: color }}>{color}</div>;
}

export default withStyles(styles)(DraggableColorBox);
