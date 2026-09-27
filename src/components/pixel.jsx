import { useContext } from 'react';
import ColorContext from '../store/color-context';

const Pixel = ({ size, power }) => {
  const colorCtx = useContext(ColorContext);
  const pixelColor = power ? colorCtx.pixelColor : colorCtx.pixelOffColor;
  const height = size / 2;
  const width = size;
  const totalWidth = width + height;

  return (
    <div style={{ margin: '0px' }}>
      <svg
        className="transition"
        width={totalWidth}
        height={height}
        viewBox={`0 0 ${totalWidth} ${height}`}
        aria-hidden="true"
      >
        <polygon
          points={`0,${height / 2} ${height / 2},0 ${height / 2 + width},0 ${totalWidth},${height / 2} ${height / 2 + width},${height} ${height / 2},${height}`}
          fill={pixelColor}
        />
      </svg>
    </div>
  );
};

export default Pixel;
