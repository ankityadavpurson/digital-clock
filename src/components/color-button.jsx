import React from 'react';

function ColorButton({ color, onClick }) {
  return (
    <input
      className={'color-palette'}
      style={{ color, backgroundColor: color, border: '0px' }}
      type="button"
      value={color}
      onClick={(e) => onClick(color)}
    />
  );
}

export default ColorButton;
