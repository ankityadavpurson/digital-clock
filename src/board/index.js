import React, { useEffect, useState } from 'react';
import TimeComponent from './time';
import DateComponent from './date';
import ColorPalette from '../components/color-palette';
import { useContext } from 'react';
import ColorContext from '../store/color-context';

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
    </div>
  );
}

export default Board;
