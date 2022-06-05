import React, { useContext, useEffect, useState } from 'react';
import { basePixelOnColor } from '../constant/color';
import ColorContext from '../store/color-context';
import ColorButton from './color-button';

const COLORS = ['white', 'grey', 'red', 'blue', 'yellow', basePixelOnColor];

let showTimeout;
const ColorPalette = () => {
  const colorCtx = useContext(ColorContext);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      showTimeout = setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
    return () => {
      clearTimeout(showTimeout);
    };
  }, [open]);

  function handleColorChange(color) {
    colorCtx.changePixelColor(color);
    setOpen(false);
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
        <span>
          {COLORS.map((color, i) => (
            <ColorButton key={i} color={color} onClick={handleColorChange} />
          ))}
        </span>
      )}
    </div>
  );
};

export default ColorPalette;
