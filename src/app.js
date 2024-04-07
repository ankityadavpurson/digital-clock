import React, { useEffect, useState } from 'react';

import { ColorContextProvider } from './store/color-context';
import Board from './board';
import Counter from './counter';

import './index.css';

const App = () => {
  const [screen, setScreen] = useState('');

  useEffect(() => {
    const { href } = window.location;
    if (href.includes('counter')) setScreen('counter');
    else setScreen('digital-clock');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ColorContextProvider>
      {screen === 'digital-clock' && <Board />}
      {screen === 'counter' && <Counter />}
    </ColorContextProvider>
  );
};

export default App;
