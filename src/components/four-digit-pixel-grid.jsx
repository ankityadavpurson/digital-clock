import React, { useState, useEffect } from 'react';
import PixelGrid from './pixel-grid';
import { labelColor } from '../constant/color';

function FourDigitPixelGrid({ number, label }) {
  const [oncePalce, setOncePalce] = useState(0);
  const [tensPlace, setTensPlace] = useState(0);
  const [hundredPlace, setHundredPlace] = useState(0);
  const [thousandPlace, setThousandPlace] = useState(0);

  useEffect(() => {
    const op = number % 10;
    const tp = Math.floor(number / 10) % 10;
    const hp = Math.floor(number / 100) % 10;
    const thp = Math.floor(number / 1000) % 10;
    setOncePalce(op);
    setTensPlace(tp);
    setHundredPlace(hp);
    setThousandPlace(thp);
  }, [number]);

  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <div>
        <PixelGrid number={thousandPlace} />
        <PixelGrid number={hundredPlace} />
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

export default FourDigitPixelGrid;
