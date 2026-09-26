import { Suspense, lazy, useEffect, useState } from 'react';
import ScreenLoader from './components/screen-loader';
import pathToScreenMap from './constant/router';
import './index.css';
import NotFoundClock from './screens/not-found';
import { ColorContextProvider } from './store/color-context';

const Board = lazy(() => import('./screens/board'));
const Counter = lazy(() => import('./screens/counter'));
const RadarClock = lazy(() => import('./screens/radar'));
const Speedo = lazy(() => import('./screens/speedo'));

const App = () => {
  const [screen, setScreen] = useState('');

  useEffect(() => {
    setScreen(pathToScreenMap[window.location.pathname] || 'not-found');
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case 'not-found':
        return <NotFoundClock />;
      case 'digital-clock':
        return <Board />;
      case 'counter':
        return <Counter />;
      case 'radar-clock':
        return <RadarClock />;
      case 'speedo':
        return <Speedo />;
      default:
        return null;
    }
  };

  return (
    <ColorContextProvider>
      <Suspense fallback={<ScreenLoader />}>{renderScreen()}</Suspense>
    </ColorContextProvider>
  );
};

export default App;
