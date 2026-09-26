import React, { useContext } from 'react';
import ColorContext from '../store/color-context';

const ColonPixel = () => {
  const colorCtx = useContext(ColorContext);
  return (
    <div className="colon-pixel">
      <span
        className="blink_me"
        style={{
          color: colorCtx.pixelColor,
          fontSize: 200,
        }}
      >
        :
      </span>
    </div>
  );
};

export default ColonPixel;
