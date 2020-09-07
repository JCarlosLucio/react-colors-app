import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useTimedToggle from './hooks/useTimedToggle';
import { Link } from 'react-router-dom';
import './ColorBox.css';

function ColorBox({ background, name, moreUrl }) {
  const [isCopied, toggleIsCopied] = useTimedToggle(1500);

  return (
    <CopyToClipboard text={background} onCopy={toggleIsCopied}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${isCopied && 'show'}`}
        />
        <div className={`copy-msg ${isCopied && 'show'}`}>
          <h1>COPIED!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">COPY</button>
        </div>
        <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
          <span className="see-more">MORE</span>
        </Link>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
