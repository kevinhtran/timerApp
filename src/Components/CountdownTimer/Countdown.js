import React, { useEffect, useState } from 'react';
// import Clock from './Clock';
import './Clock.css';

const CountDown = (props) => {

  // const [timerHours, setTimerHours] = useState(props.timerData.hours);
  // const [timerMinutes, setTimerMinutes] = useState(props.timerData.minutes);
  // const [timerSeconds, setTimerSeconds] = useState(props.timerData.seconds);

  const [timerData, setTimerData] = useState(props);

  let interval;

  const startTimer = () => {

    // const countDownHours = new Date(props.timerData.hours).getTime();
    // const countDownMinutes = new Date(props.timerData.minutes).getTime();
    // const countDownSeconds = new Date(props.timerData.seconds).getTime();
    // const countDownDate = new Date("January 01, 2022").getTime();

    interval = setInterval(() => {

      // const now = new Date().getTime();
      // const distanceHours = countDownHours - now;
      // const distanceMinutes = countDownMinutes - now;
      // const distanceSeconds = countDownSeconds - now;
      // const distanceDate = countDownDate - now;

      // const hours = Math.floor((distanceHours % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      // const minutes = Math.floor((distanceMinutes % (60 * 60 * 1000)) / (1000 * 60));
      // const seconds = Math.floor((distanceSeconds % (60 * 1000)) / 1000);
      // debugger;
      const hours = timerData.timerData.hours * 60 * 60 * 1000;
      const minutes = timerData.timerData.minutes * 60 * 1000;
      const seconds = timerData.timerData.seconds * 1000;

      let totalDistanceSeconds = hours + minutes + seconds
      // debugger;

      let decrementedTimetotalDistanceSeconds = totalDistanceSeconds
      if (decrementedTimetotalDistanceSeconds <= 0) {
        // Stop Timer
        clearInterval(interval);
      } else {
        // Update Timer

        // countDownHours(props.timerData.hours);
        // countDownMinutes(props.timerData.minutes);
        // countDownSeconds(props.timerData.seconds);

        // let decrementedTimetotalDistanceSeconds = totalDistanceSeconds - 1000
        // let decrementedTimetotalDistanceSeconds = totalDistanceSeconds
        decrementedTimetotalDistanceSeconds -= 1000;

        // totalDistanceSeconds -= 1000;
        // debugger;


        const newHours = Math.floor((decrementedTimetotalDistanceSeconds % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        const newMinutes = Math.floor((decrementedTimetotalDistanceSeconds % (60 * 60 * 1000)) / (1000 * 60));
        const newSeconds = Math.floor((decrementedTimetotalDistanceSeconds % (60 * 1000)) / 1000);
        console.log(decrementedTimetotalDistanceSeconds)
        props.handleUpdate(timerData, newHours, newMinutes, newSeconds);


        // props.handleUpdate(props, hours, minutes, seconds);
        // props.handleUpdate(props, hours, minutes, seconds);

        // setTimerHours(hours);
        // setTimerMinutes(minutes);
        // setTimerSeconds(seconds);

        // setTimerHours(props.timerData.hours);
        // setTimerH  ours(props.timerData.minutes);
        // setTimerHours(props.timerData.seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    console.log("start timer should only run once, we should only see this message once")
  })


  useEffect(() => {
    setTimerData(props)
    console.log(`what is seconds ${props.timerData.seconds} in use effect here`)

    console.log(`what is timerData seconds ${timerData.timerData.seconds} in use effect here`)

    console.log("use effect should run every re render")
  }, [props]);
  /**
   * TimerForm -> 
   */

  return (
    <div className="App">
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerData.timerData.hours}</p>
              <small>Hours</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerData.timerData.minutes}</p>
              <small>Minutes</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerData.timerData.seconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CountDown;