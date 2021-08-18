import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import './index.css';
import { ColorContextProvider } from './store/color-context';

ReactDOM.render(
  <React.StrictMode>
    <ColorContextProvider>
      <Board />
    </ColorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
