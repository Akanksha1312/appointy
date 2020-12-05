import React, { useState } from 'react';
import './DoctorSignUp.css';
import DoctorFormSignup from './DoctorFormSignup';
import DocFormSuccess from './DocFormSuccess';

const DoctorForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container_'>
        {/* /<span className='close-btn'>×</span> */}
        <div className='form-content-left_'>
          <img className='form-img_' src='images2/1467.jpg' alt='patient' />
        </div>
        {!isSubmitted ? (
          <DoctorFormSignup submitForm={submitForm} />
        ) : (
          <DocFormSuccess />
        )}
      </div>
    </>
  );
};

export default DoctorForm;