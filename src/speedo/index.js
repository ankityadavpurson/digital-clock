import React, { useEffect, useState } from 'react';

import './speedo.css';

const Speedo = () => {
  const [speedNiddle, setSpeedNiddle] = useState(0);

  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => setSpeedNiddle(120), 400);
    setTimeout(() => setSpeedNiddle(0), 990);

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

  const normalise = (num) => {
    if (!num) return 0;
    return Math.round(num);
  };

  function showPosition(_position) {
    setPosition(_position);
    setSpeedNiddle(normalise(_position.coords.speed));
  }

  function shohError(_error) {
    setPosition(null);
    setError(_error.message);
  }

  function scaleValue(input) {
    if (input < 0) return 0;
    if (input > 120) return 76.5;
    const inputRange = 120;
    const outputRange = 153;
    const scaleFactor = outputRange / inputRange;
    const scaledValue = input * scaleFactor - 76.5;
    return scaledValue;
  }

  return (
    <div className="speedo-container">
      {position ? (
        <div style={{ width: 420 }}>
          <div className="speed-meter-container border">
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
                <div className="hide-number-lines" />
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
          </div>
          <div className="border flex-center">
            <div className="lt-lg-container flex-center">
              <div className="lt-lg">
                LT {normalise(position.coords.latitude)}
              </div>
              <div className="lt-lg">
                LG {normalise(position.coords.longitude)}
              </div>
            </div>
            <div className="compass-container flex-center">
              <div className="campass-niddle">^</div>
              <div className="campass-niddle">North</div>
            </div>
          </div>
        </div>
      ) : (
        // <table>
        //   <tbody>
        //     <tr>
        //       <td>Timestamp</td>
        //       <td>{position.timestamp ? position.timestamp : 0}</td>
        //     </tr>
        //     <tr>
        //       <td>Accuracy</td>
        //       <td>{position.coords.accuracy ? position.coords.accuracy : 0}</td>
        //     </tr>
        //     <tr>
        //       <td>heading</td>
        //       <td>{position.coords.heading ? position.coords.heading : 0}</td>
        //     </tr>
        //     <tr>
        //       <td>latitude</td>
        //       <td>{position.coords.latitude ? position.coords.latitude : 0}</td>
        //     </tr>
        //     <tr>
        //       <td>longitude</td>
        //       <td>
        //         {position.coords.longitude ? position.coords.longitude : 0}
        //       </td>
        //     </tr>
        //     <tr>
        //       <td>speed</td>
        //       <td>{position.coords.speed ? position.coords.speed : 0}</td>
        //     </tr>
        //   </tbody>
        // </table>
        <div style={{ color: 'red' }}>Error: {error}</div>
      )}
    </div>
  );
};

export default Speedo;
