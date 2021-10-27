import React, { useState } from 'react';
import CountDown from '../CountdownTimer/CountDown.js'
import _ from 'lodash';

const TimerForm = () => {
  const [containerForTimers, setContainerForTimers] = useState([]);

  let handleSubmit = ((event) => {
    event.preventDefault();

    const formData = { name: "", hours: "", minutes: "", seconds: "" };

    formData.name = event.target.name.value;
    formData.hours = event.target.hours.value;
    formData.minutes = event.target.minutes.value;
    formData.seconds = event.target.seconds.value;

    let newContainer = containerForTimers.slice();
    newContainer.push(formData);
    containerForTimers.push(formData);
    setContainerForTimers(newContainer);
  });

  const updateState = ((props, hours, minutes, seconds) => {
    // [
    //   { name: "Steak", hours: "1", minutes: "2", seconds: "3" },
    //   { name: "Rice", hours: "4", minutes: "2", seconds: "7" },
    //   { name: "Lobster", hours: "1", minutes: "2", seconds: "3" }
    // ]

    let newContainerForTimers = _.cloneDeep(containerForTimers);

    // debugger

    let getTimerObject = newContainerForTimers.filter((timerData) => {
      if (timerData.name === props.timerData.name) { return timerData }
    })[0]



    getTimerObject.hours = hours;
    getTimerObject.minutes = minutes;
    getTimerObject.seconds = seconds;

    setContainerForTimers(newContainerForTimers)
  })


  let displayTimerData = (() => {
    return containerForTimers.map((data) => {
      return (
        <>
          <CountDown
            handleUpdate={updateState}
            timerData={data}
          />
        </>
      )
    })
  })

  // make a function to change the data

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