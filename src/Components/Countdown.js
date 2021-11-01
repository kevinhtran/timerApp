import React, { useEffect, useState } from 'react';
import TimerForm from './TimerForm/TimerForm';
import './TimerForm/TimerForm.css';

const CountDown = (props) => {
  const convertSecondsToMs = (num) => {
    return num * 1000;
  };

  const convertMinutesToMs = (num) => {
    return num * 60000
  };

  const totalFormSec = (convertMinutesToMs(props.formMinutes) + convertSecondsToMs(props.formSeconds));

  let minutes, seconds;

  let startTimer = () => {
    let timerUnix = new Date().getTime() + totalFormSec;

    const convertMsToMinAndSec = (ms) => {
      let min = Math.floor(ms / 60000);
      let sec = ((ms % 60000) / 1000).toFixed(0);
      return `${min} : ${(sec < 10 ? '0' : '')} ${sec}`
    };

    let intervalFunction = setInterval(() => {
      let now = new Date().getTime();
      let timeLeft = timerUnix - now;

      let timer = document.getElementById(props.formItem);
      timer.innerHTML = convertMsToMinAndSec(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(startTimer);
        document.getElementById(props.formItem).innerHTML = "";
      }
    }, 1000);
  };

  useEffect(() => {
    if (props.timerStart) {
      startTimer()
    };
  }, [props.timerStart]);

  return (
    <>
      <div className="App">
        <div>{props.formItem}</div>
        <div id={props.formItem}></div>
      </div>
    </>
  );
};

export default CountDown;