import { useState, useEffect } from 'react';

const UseForm = (callback, ValidateForm) => {
  // values that needs to go into the form
  // mSeconds is milliseconds which we will convert later to hours minutes seconds wiht helper function
  const [values, setValues] = useState({
    item: '',
    hours: '',
    minutes: '',
    seconds: ''
  });
  // useState with or errors as well. like when users can't input text and have to use numbers only
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // whenever i change something i want this to update the values
  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      // without destructuring it would be: [e.target.name]: e.target.value
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(ValidateForm(values));
    setIsSubmitted(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      callback()
    }
  })

  return { handleChange, values, handleSubmit, errors };
};

export default UseForm
