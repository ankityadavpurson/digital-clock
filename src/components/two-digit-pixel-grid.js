import React, { useState, useEffect } from 'react';
import PixelGrid from '../components/pixel-grid';
import { labelColor } from '../constant/color';

function TwoDigitPixelGrid({ number, label }) {
  const [oncePalce, setOncePalce] = useState(0);
  const [tensPlace, setTensPlace] = useState(0);

  useEffect(() => {
    const op = number % 10;
    const tp = Math.floor(number / 10) % 10;
    setOncePalce(op);
    setTensPlace(tp);
  }, [number]);

  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <div>
        <PixelGrid number={tensPlace} />
        <PixelGrid number={oncePalce} />
      </div>
      <div
        style={{
          margin: 0,
          padding: 0,
          marginTop: -35,
          paddingLeft: 30,
          color: labelColor,
          fontSize: 45,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default TwoDigitPixelGrid;
