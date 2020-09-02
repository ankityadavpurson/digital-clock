import React from 'react';

const Meridiem = () => {
  const date = new Date();
  const meridiem = date.toLocaleString().split(' ')[2];
  return (
    <div style={{ display: 'inline-block' }}>
      <div
        style={{
          color: meridiem === 'AM' ? 'lime' : 'rgb(75, 75, 75)',
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
          color: meridiem === 'PM' ? 'lime' : 'rgb(75, 75, 75)',
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
