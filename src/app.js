import React, { Suspense, lazy, useEffect, useState } from 'react';

import { ColorContextProvider } from './store/color-context';
import ScreenLoader from './components/screen-loader';

import './index.css';

const Board = lazy(() => import('./board'));
const Counter = lazy(() => import('./counter'));
const RadarClock = lazy(() => import('./radar'));

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
      {screen === 'digital-clock' && (
        <Suspense fallback={<ScreenLoader />}>
          <Board />
        </Suspense>
      )}
      {screen === 'counter' && (
        <Suspense fallback={<ScreenLoader />}>
          <Counter />
        </Suspense>
      )}
      {screen === 'radar-clock' && (
        <Suspense fallback={<ScreenLoader />}>
          <RadarClock />
        </Suspense>
      )}
    </ColorContextProvider>
  );
};

export default App;
