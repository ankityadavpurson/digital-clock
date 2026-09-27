import { createContext, useEffect, useState } from 'react';
import { basePixelOffColor, basePixelOnColor, blackColor, labelColor } from '../constant/color';
import { dimmingTimeout } from '../constant/settings';

const ColorContext = createContext({
  pixelColor: '',
  pixelOffColor: '',
  changePixelColor: (_color) => { },
  changePixelOffColor: (_color) => { },
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

  const handleDimming = () => {
    setPixelColor(labelColor);
    setPixelOffColor(blackColor);
  }

  const handleReset = () => {
    const _initialPixelColor = localStorage.getItem('pixelColor');
    const _initialPixelOffColor = localStorage.getItem('pixelOffColor');
    setPixelColor(_initialPixelColor || basePixelOnColor);
    setPixelOffColor(_initialPixelOffColor || basePixelOffColor);
  }

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = () => {
      handleReset();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleDimming();
      }, dimmingTimeout);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);


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
