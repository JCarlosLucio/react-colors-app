import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

function Palette({ palette }) {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={(newLevel) => setLevel(newLevel)}
          trackStyle={{ backgroundColor: 'transparent' }}
          handleStyle={{
            backgroundColor: 'green',
            borderColor: 'green',
            marginTop: -3,
          }}
          railStyle={{ height: 8 }}
        />
      </div>
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
}

export default Palette;
