import React, { useEffect, useState } from 'react';

const RadarClockIcon = () => {
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    let intervalNode;
    let _deg = 0;
    clearInterval(intervalNode);
    intervalNode = setInterval(() => {
      if (_deg > 360) _deg = 0;
      setDeg(_deg++);
    }, 20);

    return () => {
      clearInterval(intervalNode);
    };
  }, []);

  const dotsStyle = {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#ff004465',
    position: 'absolute',
  };

  return (
    <div>
      <div
        className="radar-clock-icon"
        style={{
          position: 'relative',
          overflow: 'hidden',
          transform: `rotate(${deg}deg)`,
        }}
      >
        <div
          style={{
            width: 1.5,
            height: 12,
            borderRadius: 10,
            backgroundColor: '#ff0044',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
          }}
        />
      </div>

      <div
        className="blink_me"
        style={{ ...dotsStyle, top: '25%', left: '50%' }}
      />
      <div
        className="blink_me"
        style={{ ...dotsStyle, top: '45%', left: '35%' }}
      />
      <div
        className="blink_me"
        style={{ ...dotsStyle, top: '55%', left: '60%' }}
      />
    </div>
  );
};

export default RadarClockIcon;
