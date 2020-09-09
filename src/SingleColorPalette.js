import React from 'react';

const gatherShades = (palette, colorId) => {
  const shades = [];
  const allColors = palette.colors;
  for (const key in allColors) {
    shades.push(allColors[key].find((color) => color.id === colorId));
  }
  return shades.slice(1);
};

function SingleColorPalette({ palette, colorId }) {
  const shades = gatherShades(palette, colorId);

  return (
    <div>
      <h1>SINGLE COLOR PALETTE</h1>
    </div>
  );
}

export default SingleColorPalette;
