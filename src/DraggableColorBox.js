import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
  },
};

function DraggableColorBox({ color, name, classes }) {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div>
        <span>{name}</span>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
