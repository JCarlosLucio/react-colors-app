import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LevelSlider from './LevelSlider';
import './Navbar.css';

function Navbar({ level, setLevel, format, setFormat, showingAllColors }) {
  const [open, setOpen] = useState(false);

  const handleLevelChange = (e, newValue) => {
    setLevel(newValue);
  };

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <nav className="Navbar">
      <div className="logo">
        <Link to="/">reactcolorapp</Link>
      </div>
      {showingAllColors && (
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <LevelSlider
              aria-label="level slider"
              value={level}
              min={100}
              max={900}
              step={100}
              onChange={handleLevelChange}
            />
          </div>
        </div>
      )}
      <div className="select-container">
        <Select value={format} onChange={handleFormatChange}>
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
        message={
          <span id="message-id">Format Changed To {format.toUpperCase()}</span>
        }
        ContentProps={{ 'aria-describedby': 'message-id' }}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={closeSnackbar}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </nav>
  );
}

export default Navbar;
