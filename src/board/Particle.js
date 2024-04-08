import React, { useContext, useEffect, useState } from 'react';
import ColorContext from '../store/color-context';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomPosition = () => ({
  top: getRandomNumber(-50, window.innerHeight),
  left: getRandomNumber(-50, window.innerWidth),
});

const Particle = () => {
  const colorCtx = useContext(ColorContext);
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    setPosition(getRandomPosition());

    let interval;
    clearInterval(interval);
    interval = setInterval(() => setPosition(getRandomPosition()), 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="particle"
      style={{
        ...position,
        backgroundColor: `${colorCtx.pixelColor}10`,
      }}
    />
  );
};

export default Particle;
