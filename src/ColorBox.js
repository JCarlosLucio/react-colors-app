import React from 'react';
import useTimedToggle from './hooks/useTimedToggle';
import clsx from 'clsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles/ColorBoxStyles';

function ColorBox({ background, name, moreUrl, showingFullPalette, classes }) {
  const [isCopied, toggleIsCopied] = useTimedToggle(1500);

  return (
    <CopyToClipboard text={background} onCopy={toggleIsCopied}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={clsx(classes.copyOverlay, {
            [classes.showOverlay]: isCopied,
          })}
        />
        <div
          className={clsx(classes.copyMessage, {
            [classes.showMessage]: isCopied,
          })}
        >
          <h1>COPIED!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
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
