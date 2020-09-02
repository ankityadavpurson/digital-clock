import React from 'react';
import { basePixcelOnColor } from '../constant/color';

const ColonPixcel = () => {
  return (
    <div className="colon-pixcel">
      <span
        style={{
          color: basePixcelOnColor,
          fontSize: 200,
        }}
      >
        :
      </span>
    </div>
  );
};

export default ColonPixcel;
