import React, { useEffect, useState } from "react";

const NumberGenerator = ({ label, length, value, onSelect }) => (
  <div className="selector-number">
    <label htmlFor={`${label}-selector`}>{label}</label>
    <select
      name={`${label}-selector`}
      id={`${label}-selector`}
      value={value}
      onChange={(e) => onSelect(e.target.value)}
    >
      {getTimeNumber(length).map((num) => (
        <option key={crypto.randomUUID()} value={num}>
          {num}
        </option>
      ))}
    </select>
  </div>
);

const getTimeNumber = (length = 12) => Array.from({ length }, (_, i) => i);

const defaultTime = { hh: 0, mm: 0, ss: 0 };
const SelectTime = ({
  ticStarted,
  stoped,
  initTime,
  onSelect,
  onStart,
  onPause,
  onResume,
  onStop,
}) => {
  const [time, setTime] = useState(defaultTime);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = () => {
      setOpen(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setOpen(false);
      }, 5000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleUpdateTime = (hands, timeNumber) => {
    let _time = 0;
    const _timeNumber = parseInt(timeNumber);
    if (hands === "hours") {
      setTime((st) => ({ ...st, hh: _timeNumber }));
      _time = _timeNumber * 60 * 60 + time.mm * 60 + time.ss;
    }
    if (hands === "minutes") {
      setTime((st) => ({ ...st, mm: _timeNumber }));
      _time = time.hh * 60 * 60 + _timeNumber * 60 + time.ss;
    }
    if (hands === "seconds") {
      setTime((st) => ({ ...st, ss: _timeNumber }));
      _time = time.hh * 60 * 60 + time.mm * 60 + _timeNumber;
    }
    onSelect(_time);
  };

  const handleClearTime = () => {
    setTime({ hh: 0, mm: 0, ss: 0 });
    onSelect(0);
  };

  return (
    <div className="dialog-container" style={{ bottom: open ? 0 : -210 }}>
      <div className="dialog">
        <div>
          {ticStarted && (
            <>
              <button
                className="button"
                title={stoped ? "Resume" : "Pause"}
                onClick={stoped ? onResume : onPause}
              >
                {stoped ? <span>▶️</span> : <span>⏸️</span>}
              </button>
              {!stoped && (
                <button className="button" title="Stop" onClick={onStop}>
                  <span>⏹️</span>
                </button>
              )}
            </>
          )}
          <button
            className="button"
            title={ticStarted ? "Restart" : "Start"}
            onClick={onStart}
          >
            {ticStarted ? <span>🔄</span> : <span>▶️</span>}
          </button>
          {initTime > 0 && (
            <button className="button" title="Clear" onClick={handleClearTime}>
              <span>❌</span>
            </button>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <NumberGenerator
            label="hours"
            length={24}
            value={time.hh}
            onSelect={(value) => handleUpdateTime("hours", value)}
          />
          <NumberGenerator
            label="minutes"
            length={60}
            value={time.mm}
            onSelect={(value) => handleUpdateTime("minutes", value)}
          />
          <NumberGenerator
            label="seconds"
            length={60}
            value={time.ss}
            onSelect={(value) => handleUpdateTime("seconds", value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectTime;
