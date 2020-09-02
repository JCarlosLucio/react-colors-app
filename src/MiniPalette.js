import React from 'react';
import { withStyles } from '@material-ui/core/styles';

function MiniPalette({ paletteName, emoji, id, colors }) {
  return (
    <div>
      <div />
      <h5>
        {paletteName}
        <span>{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;
