import React, { useEffect, useState } from 'react';
import './Clock.css';

const CountDown = (props) => {

  const [timerData, setTimerData] = useState(props);

  let interval;

  const startTimer = () => {

    interval = setInterval(() => {

      const hours = timerData.timerData.hours * 60 * 60 * 1000;
      const minutes = timerData.timerData.minutes * 60 * 1000;
      const seconds = timerData.timerData.seconds * 1000;

      let totalDistanceSeconds = hours + minutes + seconds

      let decrementedTimetotalDistanceSeconds = totalDistanceSeconds

      if (decrementedTimetotalDistanceSeconds <= 0) {
        // Stop Timer
        clearInterval(interval);
      } else {
        // Update Timer
        decrementedTimetotalDistanceSeconds -= 1000;

        const newHours = Math.floor((decrementedTimetotalDistanceSeconds % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        const newMinutes = Math.floor((decrementedTimetotalDistanceSeconds % (60 * 60 * 1000)) / (1000 * 60));
        const newSeconds = Math.floor((decrementedTimetotalDistanceSeconds % (60 * 1000)) / 1000);
        props.handleUpdate(timerData, newHours, newMinutes, newSeconds);

      }
    }, 1000);
  };

  // useEffect(() => {
  //   startTimer();
  //   console.log("start timer should only run once, we should only see this message once")
  // })


  // useEffect(() => {
  //   setTimerData(props)
  //   console.log(`what is seconds ${props.timerData.seconds} in use effect here`);

  //   console.log(`what is timerData seconds ${timerData.timerData.seconds} in use effect here`);

  //   console.log("use effect should run every re render");
  // }, [props]);

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