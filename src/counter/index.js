import React, { useState } from 'react';
import SelectTime from './SelectTime';
import './counter.css';

let interval, intervalh;
const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [initTime, setInitTime] = useState(0);
  const [height, setHeight] = useState(0);
  const [ticStarted, setTicStarted] = useState(false);
  const [stoped, setStoped] = useState(false);

  const handleStartTimer = (paused) => {
    if (initTime === 0) {
      clearInterval(interval);
      if (!paused) setSeconds(0);
      setHeight(100);
      setTicStarted(true);
      setStoped(false);
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      return;
    }

    if (!paused) {
      setHeight(0);
      setSeconds(initTime);
    }
    clearInterval(interval);
    clearInterval(intervalh);
    setTicStarted(true);
    setStoped(false);

    intervalh = setInterval(() => {
      setHeight((h) => {
        if (h >= 100) clearInterval(intervalh);
        return h + 100 / initTime / 10;
      });
    }, 100);

    interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 0) {
          clearInterval(interval);
          setTicStarted(false);
          setHeight(0);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };

  const handleTimeChange = (value) => {
    setInitTime(value);
  };

  const handlePauseTimer = () => {
    if (initTime === 0) setSeconds(seconds);
    clearInterval(interval);
    clearInterval(intervalh);
    setStoped(true);
  };

  const handleStopTimer = () => {
    setSeconds(0);
    setHeight(0);
    clearInterval(interval);
    clearInterval(intervalh);
    setTicStarted(false);
  };

  function HHMMSS(sec) {
    let d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d = new Date(d.getTime() + sec * 1000);
    return d.toLocaleString('en-GB').split(' ')[1];
  }

  return (
    <div className="container">
      <a href="/" title="Digital Clock" className="back-btn">
        ⬅
      </a>
      <div className="time-counter-container">
        <p className="time-counter">
          {`${HHMMSS(seconds)}`}
          <span className="add-space" />
        </p>
      </div>
      <div
        className="progress"
        style={{ height: `${height > 100 ? 0 : height}vh` }}
      />
      <SelectTime
        stoped={stoped}
        initTime={initTime}
        ticStarted={ticStarted}
        onStop={handleStopTimer}
        onPause={handlePauseTimer}
        onSelect={handleTimeChange}
        onStart={() => handleStartTimer()}
        onResume={() => handleStartTimer(true)}
      />
    </div>
  );
};

export default Counter;
