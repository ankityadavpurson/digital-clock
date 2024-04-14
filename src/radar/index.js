import React, { useEffect } from 'react';
import './radar.css';

const RadarClock = () => {
  useEffect(() => {
    setInterval(() => {
      const second = new Date().getSeconds();
      const minute = new Date().getMinutes();
      const hour = new Date().getHours();
      minuteHand(minute + second / 60);
      hourHand(hour + minute / 60 + second / 3600);
    }, 1000);

    setInterval(() => {
      const second = new Date().getSeconds();
      const ms = new Date().getMilliseconds();
      secondHand(second + ms / 1000);
    }, 100);

    function secondHand(second) {
      const deg = second * 6 - 180;
      const innermostRim = document.getElementsByClassName('innermost-rim')[0];
      if (innermostRim) innermostRim.style.transform = `rotate(${deg}deg)`;
    }

    function minuteHand(minute) {
      const deg = minute * 6 - 180;
      const minutePoint =
        document.getElementsByClassName('minute-point-rim')[0];
      if (minutePoint) minutePoint.style.transform = `rotate(${deg}deg)`;
    }

    function hourHand(hour) {
      const deg = hour * 30 - 180;
      const hourPoint = document.getElementsByClassName('hour-point-rim')[0];
      if (hourPoint) hourPoint.style.transform = `rotate(${deg}deg)`;
    }
  }, []);

  return (
    <div className="body-container">
      <a href="/" title="Digital Clock" className="back-btn">
        ⬅
      </a>
      <div className="radar-container flex-center relative">
        <div className="hour-rim flex-center absolute">
          <div className="relative hour-container">
            <div className="hours-line line0"></div>
            <div className="hours-line line1"></div>
            <div className="hours-line line2"></div>
            <div className="hours-line line3"></div>
            <div className="hours-line line4"></div>
            <div className="hours-line line5"></div>
            <div className="space-circle1"></div>
            <div className="hours-line line00"></div>
            <div className="hours-line line01"></div>
            <div className="number twelve">12</div>
            <div className="number three">3</div>
            <div className="number six">6</div>
            <div className="number nine">9</div>
          </div>
        </div>
        <div className="min-rim flex-center absolute">
          <div className="relative hour-container">
            <div className="minutes-line line001"></div>
            <div className="minutes-line line002"></div>
            <div className="minutes-line line003"></div>
            <div className="minutes-line line004"></div>
            <div className="minutes-line line011"></div>
            <div className="minutes-line line012"></div>
            <div className="minutes-line line013"></div>
            <div className="minutes-line line014"></div>
            <div className="minutes-line line021"></div>
            <div className="minutes-line line022"></div>
            <div className="minutes-line line023"></div>
            <div className="minutes-line line024"></div>
            <div className="minutes-line line031"></div>
            <div className="minutes-line line032"></div>
            <div className="minutes-line line033"></div>
            <div className="minutes-line line034"></div>
            <div className="minutes-line line041"></div>
            <div className="minutes-line line042"></div>
            <div className="minutes-line line043"></div>
            <div className="minutes-line line044"></div>
            <div className="minutes-line line051"></div>
            <div className="minutes-line line052"></div>
            <div className="minutes-line line053"></div>
            <div className="minutes-line line054"></div>
            <div className="space-circle2"></div>
            <div className="number sixty">60</div>
            <div className="number fifteen">15</div>
            <div className="number thirty">30</div>
            <div className="number fourtyFive">45</div>
          </div>
        </div>
        <div className="inner-rim flex-center absolute">
          <div className="relative hour-container">
            <div className="space-circle3"></div>
            <div className="line13"></div>
            <div className="line23"></div>
          </div>
        </div>
        <div className="innermost-rim relative">
          <div className="second-hand absolute"></div>
        </div>
        <div className="logo absolute">X</div>
        <div className="minute-point-rim absolute">
          <div className="minute-point absolute">
            <img src="fighter-jet.svg" alt="fighter-minute" height="80" />
          </div>
        </div>
        <div className="hour-point-rim absolute">
          <div className="hour-point absolute">
            <img
              src="flight-plane.svg"
              alt="fighter-minute"
              height="80"
              width="200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarClock;
