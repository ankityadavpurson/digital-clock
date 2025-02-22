import React from 'react';
import AnimatedClock from './animated-clock';
import RadarClockIcon from './radar-clock-icon';

const ClockNavigation = () => {
  return (
    <>
      <a href="/counter" title="Time Counter" className="back-btn counter-link">
        <AnimatedClock />
      </a>
      <a
        href="/radar-clock"
        title="Radar Clock"
        className="back-btn radar-clock-link"
      >
        <RadarClockIcon />
      </a>
      <a href="/speedo" title="Speed Meter" className="back-btn speedo-link">
        🧭
      </a>
    </>
  );
};

export default ClockNavigation;
