import { createContext, useState } from 'react';
import { basePixelOffColor, basePixelOnColor } from '../constant/color';

const ColorContext = createContext({
  pixelColor: '',
  pixelOffColor: '',
  changePixelColor: (_color) => {},
  changePixelOffColor: (_color) => {},
});

export const ColorContextProvider = (props) => {
  const initialPixelColor = localStorage.getItem('pixelColor');
  const initialPixelOffColor = localStorage.getItem('pixelOffColor');

  const [pixelColor, setPixelColor] = useState(
    initialPixelColor || basePixelOnColor
  );
  const [pixelOffColor, setPixelOffColor] = useState(
    initialPixelOffColor || basePixelOffColor
  );

  const handleChangePixelColor = (color) => {
    setPixelColor(color);
    localStorage.setItem('pixelColor', color);
  };

  const handleChangePixelOffColor = (color) => {
    setPixelOffColor(color);
    localStorage.setItem('pixelOffColor', color);
  }

  const contextValue = {
    pixelColor: pixelColor,
    pixelOffColor: pixelOffColor,
    changePixelColor: handleChangePixelColor,
    changePixelOffColor: handleChangePixelOffColor,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
