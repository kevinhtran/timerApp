import React, { useState } from 'react';
import './Form.css';
import TimerForm2 from './TimerForm2';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (<TimerForm2 submitForm={submitForm} />) : (<FormSuccess />)}
      </div>
    </>
  );
};

export default Form;
