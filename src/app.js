import React, { useEffect, useState } from 'react';

import { ColorContextProvider } from './store/color-context';
import Board from './board';
import Counter from './counter';
import RadarClock from './radar';
// Add lazyload

import './index.css';

const App = () => {
  const [screen, setScreen] = useState('');

  useEffect(() => {
    const { pathname } = window.location;
    switch (pathname) {
      case '/counter':
        setScreen('counter');
        break;
      case '/radar-clock':
        setScreen('radar-clock');
        break;
      default:
        setScreen('digital-clock');
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ColorContextProvider>
      {screen === 'digital-clock' && <Board />}
      {screen === 'counter' && <Counter />}
      {screen === 'radar-clock' && <RadarClock />}
    </ColorContextProvider>
  );
};

export default App;
