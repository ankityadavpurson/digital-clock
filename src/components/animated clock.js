import React, { useEffect, useState } from 'react';

const HANDS = [
  <span>🕛</span>,
  <span>🕐</span>,
  <span>🕑</span>,
  <span>🕒</span>,
  <span>🕓</span>,
  <span>🕔</span>,
  <span>🕕</span>,
  <span>🕖</span>,
  <span>🕗</span>,
  <span>🕘</span>,
  <span>🕙</span>,
  <span>🕚</span>,
];

const AnimatedClock = () => {
  const [clock, setClock] = useState(0);

  useEffect(() => {
    let intervalNode;
    let handNum = 0;
    clearInterval(intervalNode);
    intervalNode = setInterval(() => {
      if (handNum === HANDS.length) handNum = 0;
      setClock(handNum++);
    }, 1000);

    return () => {
      clearInterval(intervalNode);
    };
  }, []);

  return HANDS[clock];
};

export default AnimatedClock;
