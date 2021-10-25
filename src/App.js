import React from 'react'

const App = () => {

  const calculateTimeLeft = () => {
    let year = new Date.getFullYear();
    let difference = +new Date(`01/01/${year}`) - +new Date();

    // create an empty object called timeLeft which will then be filled in with days, hours, minutes, and seconds in the if statement.
    let timeLeft = {};

    // you round the numbers from the day, hours, minutes, and seconds down and drop the remainder to get a whole number value.
    // you can then compare the differnce to see if it is greater than 0.
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    // You return timeLeft variable so that you can use the value elsewhere in the component.
    return timeLeft;

  };

  return (
    <div>
    </div>
  )
}

export default App
