import React from 'react';
import TimeComponent from './time';
import DateComponent from './date';
import ColorPalette from '../components/color-palette';

function Board() {
  return (
    <div>
      <div className="board">
        <DateComponent />
        <TimeComponent />
      </div>
      <ColorPalette />
    </div>
  );
}

export default Board;
