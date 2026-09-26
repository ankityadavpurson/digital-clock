import React, { createContext, useState } from 'react';
import { basePixelOnColor } from '../constant/color';

const ColorContext = createContext({
  pixelColor: '',
  changePixelColor: (color) => {},
});

export const ColorContextProvider = (props) => {
  const initialPixelColor = localStorage.getItem('pixelColor');
  const [pixelColor, setPixelColor] = useState(
    initialPixelColor || basePixelOnColor
  );

  const handleChangePixelColor = (color) => {
    setPixelColor(color);
    localStorage.setItem('pixelColor', color);
  };

  const contextValue = {
    pixelColor: pixelColor,
    changePixelColor: handleChangePixelColor,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
