import React, { useState } from 'react';
import CountDown from '../Countdown';
import './TimerForm.css';

const TimerForm = () => {
  const [formItem, setFormItem] = useState("");
  const [formMinutes, setFormMinutes] = useState();
  const [formSeconds, setFormSeconds] = useState();
  const [timerStart, setTimerStart] = useState(false);
  const [containerForTimers, setContainerForTimers] = useState([]);

  const run2Functions = () => {
    createTimer();
  }

  const createTimer = () => {
    let newItem = formItem
    let newMinutes = formMinutes
    let newSeconds = formSeconds

    let newContainerForTimers = containerForTimers.slice();
    newContainerForTimers.push(
      <CountDown
        formItem={formItem}
        formMinutes={formMinutes}
        formSeconds={formSeconds}
        timerStart={true}
      />
    );
    setContainerForTimers(newContainerForTimers);

    setFormItem("");
    setFormMinutes(0);
    setFormSeconds(0);
  }

  const renderCountDowns = () => {
    console.log(containerForTimers)
    return containerForTimers.map((component, index) => {
      return <div key={index}>{component}</div>
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>Create your Cooking Timer!</h1>
          <div className='form-inputs'>
            <label htmlFor='item' className='form-label'>Item:</label>
            <input
              className='form-input'
              type='text'
              name='item'
              placeholder='Enter item name'
              defaultValue={formItem}
              onChange={(e) => setFormItem(e.target.value)}
            />
          </div>
          <div className='form-inputs'>
            <label htmlFor='minutes' className='form-label'>Minutes:</label>
            <input
              className='form-input'
              type='number'
              name='minutes'
              placeholder='Enter minute(s)'
              defaultValue={formMinutes}
              onChange={(e) => setFormMinutes(e.target.value)}
            />
          </div>
          <div className='form-inputs'>
            <label htmlFor='seconds' className='form-label'>Seconds:</label>
            <input
              className='form-input'
              type='number'
              name='seconds'
              placeholder='Enter second(s)'
              defaultValue={formSeconds}
              onChange={(e) => setFormSeconds(e.target.value)}
            />
          </div>
          <button
            onClick={() => { run2Functions() }}
            type='submit'
            className='form-input-btn'
          >
            Start Timer
          </button>
          <button
            type='reset'
            className='form-input-btn'
          >
            Reset Timer
          </button>
        </form>
      </div>
      {renderCountDowns()}
    </>
  );
};

export default TimerForm;