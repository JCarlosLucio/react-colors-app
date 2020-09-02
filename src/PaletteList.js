import React from 'react';

function PaletteList({ palettes }) {
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map((palette) => <p>{palette.paletteName}</p>)}
    </div>
  );
}

export default PaletteList;
