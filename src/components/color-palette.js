import React, { useContext, useEffect, useState } from 'react';
import { basePixelOnColor } from '../constant/color';
import ColorContext from '../store/color-context';
import ColorButton from './color-button';

const COLORS = ['white', 'grey', 'red', 'blue', 'yellow', basePixelOnColor];

let showTimeout;
const ColorPalette = () => {
  const colorCtx = useContext(ColorContext);

  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    showTimeout = setTimeout(() => {
      setOpen(false);
      setShow(false);
    }, 10500);
    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  function handleColorChange(color) {
    colorCtx.changePixelColor(color);
    setOpen(false);
    setShow(false);
    clearTimeout(showTimeout);
  }

  function handleOpenColorPalette() {
    setOpen(true);
  }

  return (
    <div style={{ position: 'fixed', right: 8, bottom: 0 }}>
      {!open && (
        <span>
          <ColorButton
            color={colorCtx.pixelColor}
            onClick={handleOpenColorPalette}
          />
        </span>
      )}
      {open && (
        <>
          {show && (
            <span className="blink_me">{`Change pixel color >>> `}</span>
          )}
          <span>
            {COLORS.map((color, i) => (
              <ColorButton key={i} color={color} onClick={handleColorChange} />
            ))}
          </span>
        </>
      )}
    </div>
  );
};

export default ColorPalette;
