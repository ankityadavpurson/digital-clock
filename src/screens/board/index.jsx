import { useContext, useEffect, useState } from 'react';
import ClockNavigation from '../../components/clock-navigation';
import ColorPalette from '../../components/color-palette';
import ToggleParticles from '../../components/toggle-particles';
import { blackColor } from '../../constant/color';
import ColorContext from '../../store/color-context';
import './board.css';
import DateComponent from './date';
import TimeComponent from './time';
import { dimmingTimeout } from '../../constant/settings';

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

  const [dim, setDim] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = () => {
      setDim(false);
      clearTimeout(timeoutId);
      document.body.style.cursor = 'default';
      timeoutId = setTimeout(() => {
        setDim(true);
        document.body.style.cursor = 'none';
      }, dimmingTimeout);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <div>
      {!dim && <ToggleParticles />}
      <div className="board" style={dim ? { backgroundColor: blackColor } : {}}>
        {date && <DateComponent zoom={width} />}
        {time && <TimeComponent zoom={width} />}
      </div>
      {!dim && (
        <>
          {palette && <ColorPalette />}
          <ClockNavigation />
        </>
      )}
    </div>
  );
}

export default Board;
