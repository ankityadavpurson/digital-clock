import { useEffect, useState } from 'react';
import AnimatedClock from '../../components/animated-clock';
import BackButton from '../../components/back-button';
import './speedo.css';

const Speedo = () => {
  const [speedNiddle, setSpeedNiddle] = useState(0);
  const [maxSpeed, setMaxSpeed] = useState(0);
  const [direction, setDirection] = useState(0);

  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [showCampass, setShowCampass] = useState(false);

  const getNIddleColor = (speed) => {
    if (speed < 40) return 'white';
    else if (speed >= 40 && speed < 50) return '#ffcf4f';
    else if (speed >= 50) return '#ff4a4a';
  };

  useEffect(() => {
    setTimeout(() => setSpeedNiddle(100), 400);
    setTimeout(() => setSpeedNiddle(0), 990);

    const watchId = navigator.geolocation.watchPosition(
      showPosition,
      showError,
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
    setMaxSpeed((prevMaxSpeed) => {
      const currentSpeed = normalise(_position.coords.speed * 3.6);
      return currentSpeed > prevMaxSpeed ? currentSpeed : prevMaxSpeed;
    });
  }

  function showError(_error) {
    setPosition(null);
    setError(_error.message);
  }

  return (
    <>
      <BackButton />
      <div className="speedo-container">
        <div className="sub-speedo-container flex-center">
          {position && (
            <>
              <div
                style={{
                  position: 'relative',
                  width: '280px',
                  height: '280px',
                  margin: '0 auto',
                  scale: '1.5',
                }}
              >
                <svg
                  width="280"
                  height="280"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  {/* Background Circle */}
                  <circle cx="140" cy="140" r="130" fill="#1f1f1f" />

                  {/* Speed Marks - Simple white ticks */}
                  {Array.from({ length: 9 }).map((_, i) => {
                    const angle = -180 + i * 22.5;
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 140 + 105 * Math.cos(rad);
                    const y1 = 140 + 105 * Math.sin(rad);
                    const x2 = 140 + 120 * Math.cos(rad);
                    const y2 = 140 + 120 * Math.sin(rad);

                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke={getNIddleColor(speedNiddle)}
                        style={{ transition: 'transform 0.5s ease' }}
                      />
                    );
                  })}

                  {/* Needle with gradient */}
                  <defs>
                    <linearGradient
                      id="needleGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{
                          stopColor: getNIddleColor(speedNiddle),
                          stopOpacity: 1,
                        }}
                      />
                      <stop
                        offset="100%"
                        style={{
                          stopColor: 'black',
                          stopOpacity: 1,
                        }}
                      />
                    </linearGradient>
                  </defs>

                  {/* Needle with gradient */}
                  <defs>
                    <linearGradient
                      id="maxNeedleGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: '#ffffff2d', stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: '#00000079', stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>

                  {/* Needle shape */}
                  <g
                    style={{
                      transition: 'transform 0.5s ease',
                      transformOrigin: '140px 140px',
                      transform: `rotate(${
                        -180 + (Math.min(speedNiddle, 100) / 100) * 180
                      }deg)`,
                    }}
                  >
                    <polygon
                      points="140,140 135,145 240,140 135,135"
                      fill="url(#needleGradient)"
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
                      }}
                    />
                  </g>

                  {/* Max Needle shape */}
                  <g
                    style={{
                      transition: 'transform 0.5s ease',
                      transformOrigin: '140px 140px',
                      transform: `rotate(${
                        -180 + (Math.min(maxSpeed, 100) / 100) * 180
                      }deg)`,
                    }}
                  >
                    <polygon
                      points="140,140 135,145 240,140 135,135"
                      fill="url(#maxNeedleGradient)"
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
                      }}
                    />
                  </g>

                  {/* Center Pin */}
                  <circle cx="140" cy="140" r="25" fill="#2a2a2a" />
                  <circle
                    cx="140"
                    cy="140"
                    r="15"
                    fill="#1a1a1a"
                    stroke="#444"
                    strokeWidth="1"
                  />
                </svg>
                <div
                  style={{
                    zIndex: 99,
                    position: 'absolute',
                    top: '70%',
                    left: '50%',
                    transform: 'translate(-50%, -75%)',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                  }}
                >
                  <span>{speedNiddle}|</span>
                  <span style={{ color: 'gray' }}>{maxSpeed}</span>
                  <span> kmph</span>
                </div>
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
