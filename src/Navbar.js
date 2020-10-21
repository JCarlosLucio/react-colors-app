import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import LevelSlider from './LevelSlider';
import styles from './styles/NavbarStyles';

function Navbar({
  level,
  setLevel,
  format,
  setFormat,
  showingAllColors,
  classes,
}) {
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
    <nav className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">reactcolorapp</Link>
      </div>
      {showingAllColors && (
        <div className={classes.sliderContainer}>
          <span>Level: {level}</span>
          <div className={classes.slider}>
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
      <div className={classes.selectContainer}>
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

export default withStyles(styles)(Navbar);
