import React, { useState, useEffect } from 'react';
import TwoDigitPixelGrid from '../../components/two-digit-pixel-grid';
import ColonPixel from '../../components/colon-pixel';
import Meridiem from '../../components/meridiem';

function TimeComponent({ zoom = '100%' }) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [meridiem, setMeridiem] = useState(false);

  useEffect(() => setTime());

  function setTimeState(hr, min, sec, mdrm) {
    setHour(hr > 12 ? Math.abs(hr - 12) : hr);
    setMinute(min);
    setSecond(sec);
    setMeridiem(mdrm);
  }

  function setTime() {
    setInterval(() => {
      const date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();
      const md = date.getHours() >= 12;
      setTimeState(h, m, s, md);
    }, 1000);
  }

  return (
    <div style={{ zoom }}>
      <Meridiem meridiem={meridiem} />
      <TwoDigitPixelGrid number={hour} label="HOUR" />
      <ColonPixel />
      <TwoDigitPixelGrid number={minute} label="MINUTE" />
      <ColonPixel />
      <TwoDigitPixelGrid number={second} label="SECOND" />
    </div>
  );
}

export default TimeComponent;
