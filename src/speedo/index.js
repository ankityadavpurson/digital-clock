import React, { useEffect, useState } from 'react';

import './speedo.css';

const Speedo = () => {
  const [speedNiddle, setSpeedNiddle] = useState(0);
  const [direction, setDirection] = useState(0);

  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setSpeedNiddle(120);
      setDirection(359);
    }, 400);
    setTimeout(() => {
      setSpeedNiddle(0);
      setDirection(0);
    }, 990);

    // setPosition({
    //   coords: {
    //     accuracy: 1017.7767666318387,
    //     altitude: 12,
    //     altitudeAccuracy: 1,
    //     heading: 120,
    //     latitude: 12.845056,
    //     longitude: 77.6667136,
    //     speed: 1.96,
    //   },
    //   timestamp: 1718453589038,
    // });

    const watchId = navigator.geolocation.watchPosition(
      showPosition,
      shohError,
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const normaliseToFixed = (num) => {
    if (!num) return 0;
    return num.toFixed(3);
  };

  const normalise = (num) => {
    if (!num) return 0;
    return Math.round(num);
  };

  function showPosition(_position) {
    setPosition(_position);
    setSpeedNiddle(normalise(_position.coords.speed) * 3.6);
    setDirection(normalise(_position.coords.heading));
  }

  function shohError(_error) {
    setPosition(null);
    setError(_error.message);
  }

  function scaleValue(input) {
    if (input < 0) return 0;
    if (input > 120) return 76;
    const inputRange = 121;
    const outputRange = 154;
    const scaleFactor = outputRange / inputRange;
    const scaledValue = input * scaleFactor - 76;
    return scaledValue;
  }

  return (
    <div className="speedo-container">
      {position ? (
        <div className="sub-speedo-container flex-center">
          <div>{direction}</div>
          <div className="speed-meter-container" style={{ width: 500 }}>
            <div className="speed-meter-numbers-container">
              <div className="speed-meter-numbers-arc">
                <div className="numbers-line meter-numbers-1" />
                <div className="numbers-line meter-numbers-2" />
                <div className="numbers-line meter-numbers-3" />
                <div className="numbers-line meter-numbers-4" />
                <div className="numbers-line meter-numbers-5" />
                <div className="numbers-line meter-numbers-6" />
                <div className="numbers-line meter-numbers-7" />
                <div className="numbers-line meter-numbers-8" />
                <div className="numbers-line meter-numbers-9" />
                <div className="hide-number-lines">
                  <div className="digital-font speed-number">{speedNiddle}</div>
                  <div style={{ marginBlock: 15 }}>km/h</div>
                </div>
              </div>
            </div>
            <div
              className="speed-meter-niddle-container"
              style={{
                transform: `rotate(${scaleValue(speedNiddle)}deg)`,
              }}
            >
              <div className="speed-meter-niddle" />
              <div className="speed-meter-niddle-cover" />
            </div>
            <div className="lt-lg-container flex-center">
              <div className="lt-lg">
                LT {normaliseToFixed(position.coords.latitude)}
              </div>
              <div className="lt-lg">
                LG {normaliseToFixed(position.coords.longitude)}
              </div>
            </div>
          </div>
          <div className="direction-container" style={{ width: 500 }}>
            <div className="compass-container flex-center">
              <div className="point north">N</div>
              <div className="point south">S</div>
              <div className="point west">W</div>
              <div className="point east">E</div>
              <div className="campass-niddle-container flex-center">
                <div
                  className="campass-niddle"
                  style={{ transform: `rotate(${direction}deg)` }}
                >
                  <div className="campass-niddle-red" />
                  <div className="campass-niddle-white" />
                </div>
              </div>
              <div className="point-center" />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ color: 'red' }}>Error: {error}</div>
      )}
    </div>
  );
};

export default Speedo;
