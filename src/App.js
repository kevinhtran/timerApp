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

  // to make the coutdown timer work, you will need to wire up the calculateTimeLeft method we previously coded to update the state
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  return (
    <div>
    </div>
  )
}

export default App
