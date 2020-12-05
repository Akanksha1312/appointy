import React from 'react';
import './Form.css';
//import PatientDash from '../../Patient/Patient';

const FormSuccess = () => {
  return (
    // <PatientDash />
    <div className='form-content-right-'>
      <h1 className='form-success-'>We have received your request!</h1>
      <img className='form-img-2-' src='img/img-3.svg' alt='success-img' />
    </div>
  );
};

export default FormSuccess;