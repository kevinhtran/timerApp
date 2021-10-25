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

  // Now we will add several JSX components to the return statement
  // We use the ternary operator to check if there is time left or if it is time for New Year
  // To use the timerComponents array, you need to check its length and either return it or let the user know that the timer has already elapsed.
  // In React JSX components, you use a ternary operator in place of a JS if statement. This is because only expressions are allowed inside JSX.
  // The timerComponents.length line of code checks to see if there is anything inside the timerComponents array and renders it if there is, otherwise it renders Time's up. Happy New Year!!!
  // we create a new state for the current year up there under  the timeLeft state variable.
  // we set the initial state to new Date().getFullYear() + 1 because it's the next year's new year count down.
  // this method will grab the current year like you used in the calculateTimeLeft function
  return (
    <div>
      <h1>{nextYear} New Year Countdown</h1>
      {timerComponents.length ? timerComponents : <span>Time's up. Happy New Year!!!</span>}
    </div>
  )
}

export default App
