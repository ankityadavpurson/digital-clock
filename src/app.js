import React, { Suspense, lazy, useEffect, useState } from 'react';

import { ColorContextProvider } from './store/color-context';
import ScreenLoader from './components/screen-loader';

import './index.css';

const Board = lazy(() => import('./screens/board'));
const Counter = lazy(() => import('./screens/counter'));
const RadarClock = lazy(() => import('./screens/radar'));
const Speedo = lazy(() => import('./screens/speedo'));

const App = () => {
  const [screen, setScreen] = useState('');

  useEffect(() => {
    switch (window.location.pathname) {
      case '/counter':
        setScreen('counter');
        break;
      case '/radar-clock':
        setScreen('radar-clock');
        break;
      case '/speedo':
        setScreen('speedo');
        break;
      default:
        setScreen('digital-clock');
        break;
    }
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
      {screen === 'speedo' && (
        <Suspense fallback={<ScreenLoader />}>
          <Speedo />
        </Suspense>
      )}
    </ColorContextProvider>
  );
};

export default App;
