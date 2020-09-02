import React from 'react';

const Pixcel = ({ size, power }) => {
  const color = power ? 'lime' : 'rgb(75, 75, 75)';
  const height = size / 2;
  const width = size;
  return (
    <div style={{ margin: '0px' }}>
      <div
        style={{
          width: '0',
          height: '0',
          borderTop: `${height / 2}px solid transparent`,
          borderBottom: `${height / 2}px solid transparent`,
          borderRight: `${height / 2}px solid ${color}`,
          display: 'inline-block',
        }}
      ></div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          display: 'inline-block',
          backgroundColor: color,
        }}
      ></div>
      <div
        style={{
          width: '0',
          height: '0',
          borderTop: `${height / 2}px solid transparent`,
          borderBottom: `${height / 2}px solid transparent`,
          borderLeft: `${height / 2}px solid ${color}`,
          display: 'inline-block',
        }}
      ></div>
    </div>
  );
};

export default Pixcel;
