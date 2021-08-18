import React, { useContext } from 'react';
import { basePixelOffColor } from '../constant/color';
import ColorContext from '../store/color-context';

const Meridiem = ({ meridiem }) => {
  const colorCtx = useContext(ColorContext);
  return (
    <div style={{ display: 'inline-block' }}>
      <div
        style={{
          color: !meridiem ? colorCtx.pixelColor : basePixelOffColor,
          margin: 0,
          padding: 0,
          fontSize: 40,
          fontWeight: 'bold',
        }}
      >
        {'AM'}
      </div>
      <div
        style={{
          color: meridiem ? colorCtx.pixelColor : basePixelOffColor,
          margin: 0,
          padding: 0,
          fontSize: 40,
          fontWeight: 'bold',
        }}
      >
        {'PM'}
      </div>
      <div
        style={{
          color: 'transparent',
          margin: 0,
          padding: 0,
          fontSize: 40,
          fontWeight: 'bold',
        }}
      >
        {'...'}
      </div>
      <div
        style={{
          color: 'transparent',
          margin: 0,
          padding: 0,
          fontSize: 40,
          fontWeight: 'bold',
        }}
      >
        {'...'}
      </div>
    </div>
  );
};

export default Meridiem;
