import { useEffect, useState } from 'react';
import AnimatedClock from '../../components/animated-clock';
import BackButton from '../../components/back-button';
import './speedo.css';

const getNIddleColor = (speed) => {
  if (speed > 50) return '#ff4a4a';
  if (speed > 40) return '#ffcf4f';
  return 'white';
};

const Speedo = () => {
  const [speedNiddle, setSpeedNiddle] = useState(0);
  const [direction, setDirection] = useState(0);

  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [showCampass, setShowCampass] = useState(false);

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

  const handleOrientation = (event) => {
    setDirection(normalise(event.alpha));
  };

  useEffect(() => {
    window.addEventListener('deviceorientationabsolute', handleOrientation);

    return () =>
      window.removeEventListener(
        'deviceorientationabsolute',
        handleOrientation
      );
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
    setSpeedNiddle(normalise(_position.coords.speed * 3.6));
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
    <>
      <BackButton />
      <div className="speedo-container">
        <div className="sub-speedo-container flex-center">
          {position && (
            <>
              <div
                className="speed-meter-container"
                style={{ width: '100vw', color: getNIddleColor(speedNiddle) }}
              >
                <div className="speed-meter-numbers-container">
                  <div className="speed-meter-numbers-arc">
                    <NumberLines speed={speedNiddle} />
                    <div className="hide-number-lines" />
                  </div>
                </div>
                <div
                  className="speed-meter-niddle-container"
                  style={{ transform: `rotate(${scaleValue(speedNiddle)}deg)` }}
                >
                  <div
                    className="speed-meter-niddle"
                    style={{ backgroundColor: getNIddleColor(speedNiddle) }}
                  />
                  <div className="speed-meter-niddle-cover" />
                </div>
                <div className="digital-font speed-meter-niddle-cover-number">
                  {speedNiddle}
                </div>
                <div className="speed-meter-niddle-cover-number-unit">kmph</div>
              </div>
              <div
                className="direction-container"
                style={{ width: '100vw', marginTop: 40 }}
              >
                <button
                  className="toggle-compass-button"
                  onClick={() => setShowCampass(!showCampass)}
                >
                  {showCampass ? 'Hide Compass' : 'Show Compass'}
                </button>
                {showCampass && (
                  <>
                    <div className="lt-lg-container flex-center">
                      <div className="lt-lg">
                        LT {normaliseToFixed(position.coords.latitude)}
                      </div>
                      <div className="lt-lg">
                        LG {normaliseToFixed(position.coords.longitude)}
                      </div>
                    </div>
                    <div className="compass-container flex-center">
                      <div className="point north">N</div>
                      <div className="point south">S</div>
                      <div className="point west">E</div>
                      <div className="point east">W</div>
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
                  </>
                )}
              </div>
            </>
          )}
          {!position && !error && (
            <div className="loading-container">
              <div>Waiting for GPS signal...</div>
              <div className="animated-clock-container">
                <AnimatedClock />
              </div>
            </div>
          )}
        </div>
      </div>
      {error && <div className="speedo-error-container">Error: {error}</div>}
    </>
  );
};

export default Speedo;

const NumberLines = ({ speed }) => {
  const lines = 9;

  return Array.from({ length: lines }, (_, i) => (
    <div
      key={`number-line-${i + 1}`}
      className={`numbers-line meter-numbers-${i + 1}`}
      style={{ borderColor: getNIddleColor(speed) }}
    />
  ));
};
