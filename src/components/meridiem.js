import React from 'react';
import { basePixcelOffColor, basePixcelOnColor } from '../constant/color';

const Meridiem = () => {
  const date = new Date();
  const meridiem = date.getHours() >= 12;
  return (
    <div style={{ display: 'inline-block' }}>
      <div
        style={{
          color: !meridiem ? basePixcelOnColor : basePixcelOffColor,
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
          color: meridiem ? basePixcelOnColor : basePixcelOffColor,
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
