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
  // timeLeft will carry our time left object of intervals and provide us with a method to set the state.
  // on component load, the timeLeft value is set to the current time left value.
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  // we use the useEffect hook to deal with the component side effects which is anything that affects something outside the scope of the function executed.
  // we also use the setTimeout method inside of the useEffect hook, it is a common react pattern when used inside of the useEffect hook.
  // the useEffect is what updates the amount of time remaining which by default, React will re-invoke the effect after every render.
  // everytime the timeLeft variable is updated in the state, the useEffect fires. Each fire, we set a timer for 1 second (or 1,000ms), which will update the time left after that time has elapsed.
  // the cycle will continue every second after that.
  // To help with eliminating the potential of stacking timeouts and causing an error you should add the clearTimeout method inside the useEffect hook as well.
  // we then add a clearTimeout method and pass in the variable timer as a parameter.
  // the return function runs everytime the useEffect runs the timer except for the first run of the component and will clear out the timeout if the component is unmounted.
  // now that the state is set to the calculateTimeLeft() object and is updating inside the effect hook, it can be used to build your display component.
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      // setYear(new Date().getFullYear());
    }, 1000);
    // clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  });

  return (
    <div>
    </div>
  )
}

export default App
