import React from 'react';
import AnimatedClock from './animated clock';

const ClockOptions = () => {
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
        <div className="radar-clock-icon" />
      </a>
    </>
  );
};

export default ClockOptions;
