import React, { useContext, useEffect, useState } from 'react';
import TimeComponent from './time';
import DateComponent from './date';
import ColorPalette from '../components/color-palette';
import ColorContext from '../store/color-context';
import ToggleParticles from '../components/toggle-particles';
import ClockNavigation from '../components/clock-navigation';

import './board.css';

const getWidthCent = () => {
  return `${((document.body.clientWidth / 1200) * 100).toFixed(0)}%`;
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
      <ToggleParticles />
      <div className="board">
        {date && <DateComponent zoom={width} />}
        {time && <TimeComponent zoom={width} />}
      </div>
      {palette && <ColorPalette />}
      <ClockNavigation />
    </div>
  );
}

export default Board;
