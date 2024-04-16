import React, { useEffect, useState } from 'react';

import './speedo.css';

const Speedo = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      showPosition,
      shohError,
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  function showPosition(_position) {
    setPosition(_position);
  }

  function shohError(_error) {
    setPosition(null);
    setError(_error.message);
  }

  return (
    <div className="speedo-container">
      {position ? (
        <table>
          <tbody>
            <tr>
              <td>Timestamp</td>
              <td>{position.timestamp ? position.timestamp : 0}</td>
            </tr>
            <tr>
              <td>Accuracy</td>
              <td>{position.coords.accuracy ? position.coords.accuracy : 0}</td>
            </tr>
            <tr>
              <td>heading</td>
              <td>{position.coords.heading ? position.coords.heading : 0}</td>
            </tr>
            <tr>
              <td>latitude</td>
              <td>{position.coords.latitude ? position.coords.latitude : 0}</td>
            </tr>
            <tr>
              <td>longitude</td>
              <td>
                {position.coords.longitude ? position.coords.longitude : 0}
              </td>
            </tr>
            <tr>
              <td>speed</td>
              <td>{position.coords.speed ? position.coords.speed : 0}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div style={{ color: 'red' }}>Error: {error}</div>
      )}
    </div>
  );
};

export default Speedo;
