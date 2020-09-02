import React from 'react';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Day = () => {
  const date = new Date();
  const day = date.getDay();
  return (
    <div style={{ display: 'inline-block', margin: '20px' }}>
      <div
        style={{
          color: 'lime',
          margin: 0,
          padding: 0,
          fontSize: 40,
          fontWeight: 'bold',
        }}
      >
        {days[day]}
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

export default Day;
