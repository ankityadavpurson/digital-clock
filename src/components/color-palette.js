import React, { useContext, useEffect, useState } from 'react';
import { basePixelOnColor } from '../constant/color';
import ColorContext from '../store/color-context';
import ColorButton from './color-button';

const COLORS = ['white', 'grey', 'red', 'blue', 'yellow', basePixelOnColor];

let showTimeout;
const ColorPalette = () => {
  const colorCtx = useContext(ColorContext);

  const [show, setShow] = useState(true);

  useEffect(() => {
    showTimeout = setTimeout(() => setShow(false), 10500);
    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  function handleColorChange(color) {
    colorCtx.changePixelColor(color);
    setShow(false);
    clearTimeout(showTimeout);
  }

  return (
    <div style={{ position: 'fixed', right: 0, bottom: 0 }}>
      {show && <span className="blink_me">{`Change pixel color >>> `}</span>}
      <span>
        {COLORS.map((color, i) => (
          <ColorButton key={i} color={color} onClick={handleColorChange} />
        ))}
      </span>
    </div>
  );
};

export default ColorPalette;
