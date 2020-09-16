import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LevelSlider from './LevelSlider';
import { withStyles } from '@material-ui/core/styles';
import './Navbar.css';

const styles = {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto, sans-serif',
    height: '100%',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  //Added to center LevelSlider and Level span
  sliderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    width: '340px',
    marginLeft: '10px',
    marginTop: '3px',
  },
};

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

export default withStyles(styles)(Navbar);
