import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useTimedToggle from './hooks/useTimedToggle';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

import { withStyles } from '@material-ui/core/styles';

const styles = {};

function ColorBox({ background, name, moreUrl, showLink }) {
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
          <p className={isLightColor ? 'dark-text' : undefined}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? 'light-text' : undefined}>
              {name}
            </span>
          </div>
          <button className={`copy-button ${isLightColor && 'dark-text'}`}>
            COPY
          </button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isLightColor && 'dark-text'}`}>
              MORE
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
