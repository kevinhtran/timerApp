import React from 'react';
import UseForm from './UseForm';
import ValidateForm from './ValidateForm';
import './Form.css';

const TimerForm2 = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseForm(submitForm, ValidateForm);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>Create your Cooking Timer!</h1>
        <div className='form-inputs'>
          <label htmlFor='item' className='form-label'>Item</label>
          <input
            className='form-input'
            type='text'
            name='item'
            placeholder='Enter item name'
            value={values.item}
            onChange={handleChange}
          />
          {/* {errors.item && <p>{errors.item}</p>} */}
        </div>

        <div className='form-inputs'>
          <label htmlFor='hours' className='form-label'>Hours</label>
          <input
            className='form-input'
            type='text'
            name='hours'
            placeholder='Enter hour(s)'
            value={values.hours}
            onChange={handleChange}
          />
        </div>
        {/* {errors.hours && <p>{errors.hours}</p>} */}
        <div className='form-inputs'>
          <label htmlFor='minutes' className='form-label'>Minutes</label>
          <input
            className='form-input'
            type='text'
            name='minutes'
            placeholder='Enter minute(s)'
            value={values.minutes}
            onChange={handleChange}
          />
        </div>
        {/* {errors.minutes && <p>{errors.minutes}</p>} */}
        <div className='form-inputs'>
          <label htmlFor='seconds' className='form-label'>Seconds</label>
          <input
            className='form-input'
            type='text'
            name='seconds'
            placeholder='Enter second(s)'
            value={values.seconds}
            onChange={handleChange}
          />
        </div>
        {errors.seconds && <p>{errors.seconds}</p>}
        <button type='submit' className='form-input-btn' >Enter</button>
        <button type='reset' className='form-input-btn' >Reset</button>
      </form >
      {/* {displayTimerData()} */}
    </div >
  );
};

export default TimerForm2;