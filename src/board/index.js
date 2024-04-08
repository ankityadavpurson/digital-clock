import React, { useContext, useEffect, useState } from 'react';
import TimeComponent from './time';
import DateComponent from './date';
import ColorPalette from '../components/color-palette';
import ColorContext from '../store/color-context';
import './board.css';
import Particle from './Particle';

const getWidthCent = () => {
  return `${((document.body.clientWidth / window.screen.width) * 100).toFixed(
    0
  )}%`;
};

function Board({ date = true, time = true, palette = true, color = '' }) {
  const colorCtx = useContext(ColorContext);
  const [width, setWidth] = useState(getWidthCent());

  useEffect(() => {
    window.addEventListener('resize', function (event) {
      setWidth(getWidthCent());
    });
    return () => window.addEventListener('resize', null);
  }, []);

  useEffect(() => {
    if (color) colorCtx.changePixelColor(color);
  }, [color, colorCtx]);

  return (
    <div>
      <div className="board">
        {date && <DateComponent zoom={width} />}
        {time && <TimeComponent zoom={width} />}
      </div>
      {palette && <ColorPalette />}
      <a href="/counter" title="Time Counter" className="back-btn counter-link">
        <span className="blink_me">🕔</span>
      </a>
      {Array.from({ length: 16 }, (_, i) => i).map((num) => (
        <Particle key={`Particle-${num}`} />
      ))}
    </div>
  );
}

export default Board;
