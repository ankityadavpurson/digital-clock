import React, { useState, useEffect } from 'react';
import FourDigitPixcelGrid from '../../components/four-digit-pixcel-grid';
import TwoDigitPixcelGrid from '../../components/two-digit-pixcel-grid';
import Day from '../../components/day';

function DateComponent() {
  const [date, setDate] = useState(88);
  const [month, setMonth] = useState(88);
  const [year, setYear] = useState(8888);

  useEffect(() => setDateValue());

  function setDateState(yyyy, mm, dd) {
    setYear(yyyy);
    setMonth(mm);
    setDate(dd);
  }

  function setDateValue() {
    setInterval(() => {
      const dateValue = new Date();
      const yr = dateValue.getFullYear();
      const mt = dateValue.getMonth() + 1;
      const dt = dateValue.getDate();
      setDateState(yr, mt, dt);
    }, 1000);
  }

  return (
    <div>
      <FourDigitPixcelGrid number={year} label="YEAR" />
      <span style={{ marginLeft: '20px', marginRight: '20px' }}>
        <TwoDigitPixcelGrid number={month} label="MONTH" />
      </span>
      <TwoDigitPixcelGrid number={date} label="DATE" />
      <Day />
    </div>
  );
}

export default DateComponent;
