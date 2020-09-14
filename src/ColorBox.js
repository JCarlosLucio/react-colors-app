import React from 'react';
import useTimedToggle from './hooks/useTimedToggle';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './ColorBox.css';

const styles = {
  ColorBox: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1,
      transition: '0.5s',
    },
  },
  copyText: {
    color: ({ background }) =>
      chroma(background).luminance() >= 0.5 ? 'black' : 'white',
  },
  colorName: {
    color: ({ background }) =>
      chroma(background).luminance() <= 0.2 ? 'white' : 'black',
  },
  seeMore: {
    color: ({ background }) =>
      chroma(background).luminance() >= 0.5 ? 'rgba(0, 0, 0, 0.6)' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },
  copyButton: {
    color: ({ background }) =>
      chroma(background).luminance() >= 0.5 ? 'rgba(0, 0, 0, 0.6)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 'none',
    opacity: 0,
  },
};

function ColorBox({ background, name, moreUrl, showingFullPalette, classes }) {
  const [isCopied, toggleIsCopied] = useTimedToggle(1500);

  return (
    <CopyToClipboard text={background} onCopy={toggleIsCopied}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`copy-overlay ${isCopied && 'show'}`}
        />
        <div className={`copy-msg ${isCopied && 'show'}`}>
          <h1>COPIED!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>COPY</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
