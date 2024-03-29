import React, { useState, useRef, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = () => {
  const [minutesLeft, setMinutesLeft] = useState(30);
  const [secondsLeft, setSecondsLeft] = useState(0);
  
  let countdown;
  useEffect(() => {
    countdown = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
      if (secondsLeft === 0) {
        setMinutesLeft(minutesLeft - 1);
        setSecondsLeft(59);
      }
    }, 1000);
    return () => clearInterval(countdown);
  });
  const percentage = Math.round(minutesLeft / 30 * 100);
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutesLeft + ':' + secondsLeft}
        counterClockwise={true}
        strokeWidth={12}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: '#FFCA14',
          textColor: '#000',
          textSize: '24px',
          text: 'bold',
          trailColor: '#EBEBEB', 
        })}
      ></CircularProgressbar>
    </div>
  );
};

export default Timer;
