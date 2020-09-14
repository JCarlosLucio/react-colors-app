import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useTimedToggle from './hooks/useTimedToggle';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';
import './ColorBox.css';

const styles = {
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
};

function ColorBox({ background, name, moreUrl, showLink, classes }) {
  const [isCopied, toggleIsCopied] = useTimedToggle(1500);
  const isDarkColor = chroma(background).luminance() <= 0.2;
  const isLightColor = chroma(background).luminance() >= 0.5;

  return (
    <CopyToClipboard text={background} onCopy={toggleIsCopied}>
      <div style={{ background }} className="ColorBox">
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
          <button className={`copy-button ${isLightColor && 'dark-text'}`}>
            COPY
          </button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
