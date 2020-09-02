import React, { useEffect, useState } from 'react';
import Pixcel from './pixcel';

const pixcelMemory = [
  [1, 2, 3, 5, 6, 7],
  [3, 6],
  [1, 3, 4, 5, 7],
  [1, 3, 4, 6, 7],
  [2, 3, 4, 6],
  [1, 2, 4, 6, 7],
  [1, 2, 4, 5, 6, 7],
  [1, 3, 6],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 6, 7],
  [],
];

const PixcelGrid = ({ number }) => {
  const [pixcels, setPixcels] = useState([]);

  useEffect(() => {
    if (number >= 0 && number <= 10) {
      const pix = [
        { id: 1, power: false },
        { id: 2, power: false },
        { id: 3, power: false },
        { id: 4, power: false },
        { id: 5, power: false },
        { id: 6, power: false },
        { id: 7, power: false },
      ];
      pix.map((pixcel) =>
        pixcelMemory[number].forEach((p) => {
          if (pixcel.id === p) {
            pixcel.power = true;
          }
        })
      );
      setPixcels(pix);
    } else {
      const pixError = [
        { id: 1, power: true },
        { id: 2, power: true },
        { id: 3, power: false },
        { id: 4, power: true },
        { id: 5, power: true },
        { id: 6, power: false },
        { id: 7, power: true },
      ];
      setPixcels(pixError);
    }
  }, [number]);

  return (
    <div style={{ display: 'inline-block', margin: '20px' }}>
      {pixcels.map((pixcel) => (
        <div key={pixcel.id} className={`pixcel${pixcel.id}`}>
          <Pixcel size={40} power={pixcel.power} />
        </div>
      ))}
    </div>
  );
};

export default PixcelGrid;
