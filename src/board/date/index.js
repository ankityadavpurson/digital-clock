import React, { useState, useEffect } from 'react';
import FourDigitPixelGrid from '../../components/four-digit-pixel-grid';
import TwoDigitPixelGrid from '../../components/two-digit-pixel-grid';
import Day from '../../components/day';

function DateComponent() {
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [day, setDay] = useState(0);

  useEffect(() => setDateValue());

  function setDateState(yyyy, mm, dd, dy) {
    setYear(yyyy);
    setMonth(mm);
    setDate(dd);
    setDay(dy);
  }

  function setDateValue() {
    setInterval(() => {
      const dateValue = new Date();
      const yr = dateValue.getFullYear();
      const mt = dateValue.getMonth() + 1;
      const dt = dateValue.getDate();
      const dy = dateValue.getDay();
      setDateState(yr, mt, dt, dy);
    }, 1000);
  }

  return (
    <div>
      <FourDigitPixelGrid number={year} label="YEAR" />
      <span style={{ marginLeft: '20px', marginRight: '20px' }}>
        <TwoDigitPixelGrid number={month} label="MONTH" />
      </span>
      <TwoDigitPixelGrid number={date} label="DATE" />
      <Day day={day} />
    </div>
  );
}

export default DateComponent;
