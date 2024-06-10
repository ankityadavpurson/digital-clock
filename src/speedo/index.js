import React, { useEffect, useState } from 'react';

import './speedo.css';

const Speedo = () => {
  const [position, setPosition] = useState({
    coords: {
      accuracy: 1017.7767666318387,
      heading: 73,
      latitude: 12.845056,
      longitude: 77.6667136,
      speed: 1.94,
    },
    timestamp: 1717950677416,
  });
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const watchId = navigator.geolocation.watchPosition(
  //     showPosition,
  //     shohError,
  //     { enableHighAccuracy: true }
  //   );

  //   return () => {
  //     navigator.geolocation.clearWatch(watchId);
  //   };
  // }, []);

  function showPosition(_position) {
    setPosition(_position);
  }

  function shohError(_error) {
    setPosition(null);
    setError(_error.message);
  }

  const normalise = (num) => {
    if (!num) return 0;
    return Math.round(num);
  };

  return (
    <div className="speedo-container">
      {position ? (
        <div>
          <div className="speed-meter-container border">
            <div className="speed-meter-numbers-container">
              <div className="speed-meter-numbers-arc" />
              <div className="speed-meter-numbers-1" />
            </div>
            <div className="speed-meter-niddle-container">
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
