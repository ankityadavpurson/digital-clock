import React, { useState, useEffect } from 'react';
import TwoDigitPixcelGrid from '../../components/two-digit-pixcel-grid';
import ColonPixcel from '../../components/colon-pixcel';
import Meridiem from '../../components/meridiem';

function TimeComponent() {
  const [hour, setHour] = useState(88);
  const [minute, setMinute] = useState(88);
  const [second, setSecond] = useState(88);

  useEffect(() => setTime());

  function setTimeState(hr, min, sec) {
    setHour(hr - 12);
    setMinute(min);
    setSecond(sec);
  }

  function setTime() {
    setInterval(() => {
      const date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();
      setTimeState(h, m, s);
    }, 1000);
  }

  return (
    <div>
      <Meridiem />
      <TwoDigitPixcelGrid number={hour} label="HOUR" />
      <ColonPixcel />
      <TwoDigitPixcelGrid number={minute} label="MINUTE" />
      <ColonPixcel />
      <TwoDigitPixcelGrid number={second} label="SECOND" />
    </div>
  );
}

export default TimeComponent;
