import React, { useState, useEffect } from 'react'

const App = () => {

  const calculateTimeLeft = () => {
    let nextYear = new Date().getFullYear() + 1;
    let difference = +new Date(`01/01/${nextYear}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;

  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [nextYear] = useState(new Date().getFullYear() + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer)
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <h1>{nextYear} New Year Countdown</h1>
      {timerComponents.length ? timerComponents : <span>Time's up. Happy New Year!!!</span>}
    </div>
  )
}

export default App
