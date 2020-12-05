import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container-'>
        {/* /<span className='close-btn'>×</span> */}
        <div className='form-content-left-'>
          <img className='form-img-' src='images2/1467.jpg' alt='patient' />
        </div>

      {/* <FormSignup submitForm={submitForm} />  */}

        { !isSubmitted ? (
          <FormSignup submitForm={submitForm} /> 
         ) : (
          <FormSuccess />
        )} 
      </div>
    </>
  );
};

export default Form;