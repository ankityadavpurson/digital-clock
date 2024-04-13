import React, { useContext, useEffect, useState } from 'react';
import TimeComponent from './time';
import DateComponent from './date';
import ColorPalette from '../components/color-palette';
import ColorContext from '../store/color-context';
import AnimatedClock from '../components/animated clock';
import ToggleParticles from '../components/toggle-particles';
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

  const [openSite, setOpenSite] = useState(false);
  useEffect(() => {
    setTimeout(() => setOpenSite(true), 1000);
  }, []);

  return (
    <div>
      <ToggleParticles />
      <div
        className="board"
        style={{ display: openSite ? 'table-cell' : 'none' }}
      >
        {date && <DateComponent zoom={width} />}
        {time && <TimeComponent zoom={width} />}
      </div>
      {palette && <ColorPalette />}
      <a
        href="/counter"
        title="Time Counter"
        className={`back-btn transition ${
          openSite ? 'counter-link' : 'counter-link-center'
        }`}
      >
        <AnimatedClock />
      </a>
    </div>
  );
}

export default Board;
