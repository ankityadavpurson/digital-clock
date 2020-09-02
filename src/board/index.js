import React from 'react';
import TimeComponent from './time';
import DateComponent from './date';

function Board() {
  return (
    <div className="board">
      <DateComponent />
      <TimeComponent />
    </div>
  );
}

export default Board;
