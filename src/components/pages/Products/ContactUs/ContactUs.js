import React, { useState } from 'react';
import './ContactUs.css';
import FormSignup from './ContactSignUp';
// import FormSuccess from './Success';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {/* /<span className='close-btn'>×</span> */}
        {/* <div className='form-content-left'>
          <img className='form-img' src='images2/1467.jpg' alt='patient' />
        </div> */}
        {/* {!isSubmitted ? ( */}
          <FormSignup submitForm={submitForm} />
        {/* ) : (
          <FormSuccess />
        )} */}
      </div>
    </>
  );
};

export default ContactUs;