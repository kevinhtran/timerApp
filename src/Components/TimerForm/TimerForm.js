import React, { useState } from 'react';
// import Countdown from '../CountdownTimer/Countdown';

const TimerForm = () => {

  const [containerForTimers, setContainerForTimers] = useState([]);

  let handleSubmit = ((event) => {
    event.preventDefault();

    // Can i destructure this to use as props?
    // const {name: "", hours: "", minutes: "", seconds: ""} = props;

    const formData = {
      name: "",
      hours: "",
      minutes: "",
      seconds: ""
    };

    formData.name = event.target.name.value;
    formData.hours = event.target.hours.value;
    formData.minutes = event.target.minutes.value;
    formData.seconds = event.target.seconds.value;

    let newContainer = containerForTimers.slice();
    newContainer.push(formData);
    containerForTimers.push(formData);
    setContainerForTimers(newContainer);
  });

  let displayTimerData = (() => {
    return containerForTimers.map((data) => {
      return (
        <>
          <h1>{data.name}</h1>
          <h1>{data.hours}</h1>
          <h1>{data.minutes}</h1>
          <h1>{data.seconds}</h1>
          {/* <Countdown hours={ } minutes={ } seconds={ } /> */}
        </>
      )
    })
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Item name:<input type="text" name="name" placeholder="item name"></input></div>
        <div>Hours:<input type="text" name="hours" placeholder="00"></input></div>
        <div>Minutes:<input type="text" name="minutes" placeholder="00"></input></div>
        <div>Seconds:<input type="text" name="seconds" placeholder="00"></input></div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
      {displayTimerData()}
    </div>
  )
}

export default TimerForm;


// automatically reset form after hitting submit button