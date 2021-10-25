import React, { useState, useEffect } from 'react'

const App = () => {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`01/01/${year}`) - +new Date();
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
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      // setYear(new Date().getFullYear());
    }, 1000);
    return () => clearTimeout(timer)
  });

  // We will use Object.keys to iterate over the timeLeft object and build out a display component.
  // You will use the display component to show the time left before the New Year begins.

  // we create a new variable called timerComponents.
  const timerComponents = [];
  // after iterating over the keys in timeLeft, you will use this variable to push a new JSX component with the time left.
  // we use Object.keys to iterate over the timeLeft object you returned from your calculateTimeLeft function.
  // Here the code loops through the properties of the timeLeft object.
  // If the timer interval has a value above zero, it adds an element to the timerComponents array.
  // the {" "} in the code is used so that the intervals that display the time left do not run into each other when displayed on the screen.
  // This should allow you to be ready to add the new JSX in the App components return statement to display the time left until New Year.
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
    </div>
  )
}

export default App
