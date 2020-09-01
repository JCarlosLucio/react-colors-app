import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
