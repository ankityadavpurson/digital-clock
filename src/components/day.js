import React, { useContext } from 'react';
import ColorContext from '../store/color-context';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Day = ({ day }) => {
  const colorCtx = useContext(ColorContext);
  const nextDay = day === 6 ? 0 : day + 1;
  const prevDay = day === 0 ? 6 : day - 1;
  return (
    <div
      style={{
        display: 'inline-block',
        margin: '20px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <p className="day gradient1 transition">{days[prevDay]}</p>
      <p className="day transition" style={{ color: colorCtx.pixelColor }}>
        {days[day]}
      </p>
      <p className="day gradient2 transition">{days[nextDay]}</p>
    </div>
  );
};

export default Day;
