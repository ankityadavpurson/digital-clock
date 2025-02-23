import React, { useContext, useEffect, useState } from 'react';
import ColorContext from '../../store/color-context';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomPosition = () => ({
  top: getRandomNumber(50, window.innerHeight - 100),
  left: getRandomNumber(50, window.innerWidth - 100),
});

const Particle = ({ timeout }) => {
  const colorCtx = useContext(ColorContext);
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    let timeoutNode;
    let intervalNode;
    clearTimeout(timeoutNode);
    clearInterval(intervalNode);
    timeoutNode = setTimeout(() => {
      setPosition(getRandomPosition());
      intervalNode = setInterval(() => setPosition(getRandomPosition()), 10000);
    }, timeout * 1000);

    return () => {
      clearTimeout(timeoutNode);
      clearInterval(intervalNode);
    };
  }, [timeout]);

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
