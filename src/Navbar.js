import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="#">reactcolorapp</a>
      </div>
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
    </nav>
  );
}

export default Navbar;
