import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

function Navbar({ level, setLevel, format, setFormat }) {
  const [open, setOpen] = useState(true);

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="#">reactcolorapp</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
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
      </div>
      <div className="select-container">
        <Select value={format} onChange={(e) => setFormat(e.target.value)}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        message={<span id="message-id">Format Changed!</span>}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        action={
          <React.Fragment>
            <IconButton onClick={closeSnackbar}>
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </nav>
  );
}

export default Navbar;
