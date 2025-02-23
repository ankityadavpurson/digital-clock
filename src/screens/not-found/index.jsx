import { useEffect, useState } from 'react';
import AnimatedClock from '../../components/animated-clock';
import './not-found.css';

const NotFoundClock = () => {
  const [clocks, setClocks] = useState(0);
  const [clocksRow, setClocksRow] = useState(0);

  useEffect(() => {
    const updateClocks = () => {
      const screenWidth = window.innerWidth;
      const clockWidth = 100;
      const clocks = Math.floor(screenWidth / clockWidth);
      setClocks(clocks);
      const clockHeight = 100;
      const screenHeight = window.innerHeight;
      const clocksRow = Math.floor(screenHeight / clockHeight);
      setClocksRow(clocksRow);
    };

    updateClocks();
    window.addEventListener('resize', updateClocks);

    return () => {
      window.removeEventListener('resize', updateClocks);
    };
  }, []);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div>
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Click on any clock to go back to the home page.</p>
      </div>
      <div className="not-found">
        {Array.from({ length: clocksRow }).map((_, indexR) => (
          <div className="not-found-row" key={indexR}>
            {Array.from({ length: clocks }).map((_, index) => (
              <div className="not-found-clock" key={index}>
                <a href="/" title="Go to Home">
                  <AnimatedClock dialspeed={100 * getRandomNumber(1, 10)} />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotFoundClock;
