import React, { useState } from 'react';
import './SignIn.css';
import FormSignIn from './FormSignIn';
import SignInFormSuccess from './SignInFormSuccess';

const SignInForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container--'>
        {/* /<span className='close-btn'>×</span> */}
        <div className='form-content-left--'>
          <img className='form-img--' src='images2/4957136.jpg' alt='patient' />
        </div>
        {!isSubmitted ? (
          <FormSignIn submitForm={submitForm} />
        ) : (
          <SignInFormSuccess />
        )}
      </div>
    </>
  );
};

export default SignInForm;