import React, { useContext } from 'react';
import { basePixelOffColor } from '../constant/color';
import ColorContext from '../store/color-context';

const Pixel = ({ size, power }) => {
  const colorCtx = useContext(ColorContext);
  const pixelColor = power ? colorCtx.pixelColor : basePixelOffColor;
  const height = size / 2;
  const width = size;
  return (
    <div style={{ margin: '0px' }}>
      <div
        style={{
          width: '0',
          height: '0',
          borderTop: `${height / 2}px solid transparent`,
          borderBottom: `${height / 2}px solid transparent`,
          borderRight: `${height / 2}px solid ${pixelColor}`,
          display: 'inline-block',
        }}
      ></div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          display: 'inline-block',
          backgroundColor: pixelColor,
        }}
      ></div>
      <div
        style={{
          width: '0',
          height: '0',
          borderTop: `${height / 2}px solid transparent`,
          borderBottom: `${height / 2}px solid transparent`,
          borderLeft: `${height / 2}px solid ${pixelColor}`,
          display: 'inline-block',
        }}
      ></div>
    </div>
  );
};

export default Pixel;
