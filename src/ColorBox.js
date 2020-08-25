import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useTimedToggle from './hooks/useTimedToggle';
import './ColorBox.css';

function ColorBox({ background, name }) {
  const [isCopied, toggleIsCopied] = useTimedToggle(1500);

  return (
    <CopyToClipboard text={background} onCopy={toggleIsCopied}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${isCopied && 'show'}`}
        />
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">COPY</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
