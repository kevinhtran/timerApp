import React, { useState, useEffect } from 'react';
import TimerForm from '../TimerForm/TimerForm';

const Countdown = (props) => {

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
    <>
      <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </>
  )
}

export default Countdown;

// props:
// a prop is essentially an object that has values inside of it

// object destructuring:
// destructuring is the act of taking each field from that object and making it its own variable
// the code below is you are taking all of these fields {hours, minutes, seconds} out of this object and making it its own variable
// const {hours, minutes, seconds} = props;
// and you do this so that you don't have to keep naming them as: {props.element} but rather just like this: {element}
// destructure straight into your arguments field:
// for example, lets say that this is a component:
  // const Employee = ({firstName, lastName, age}) => {}

// Spread operator:
// ...
// you use it on a iterator, returns every single field within the iterator
// it expands out all the elements within the array as an object
// example:
// const numbers = [1,2,3];
// console.log(sum(...numbers)) // output: 6

// hooks:
// a function that gets triggered and somehow effects a variable or the state of our application
// useState:
// allows us to create a variable that we can dynamically change and eveytime we change that variable, it will automatically update the your render/return