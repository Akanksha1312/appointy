import React from 'react';
import validate from './validateInfoDoctor';
import useForm from './useFormDoctor';
import './DoctorSignUp.css';
import { Button } from '../../../Button';
import { Link } from 'react-router-dom';

const DoctorFormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, formerrors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right_'>
      <form onSubmit={handleSubmit} className='form_' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs_'>
          <label className='form-label_'>Username</label>
          <input
            className='form-input_'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {formerrors.username && <p>{formerrors.username}</p>}
        </div>
        <div className='form-inputs_'>
          <label className='form-label_'>Email</label>
          <input
            className='form-input_'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {formerrors.email && <p>{formerrors.email}</p>}
        </div>
        <div className='form-inputs_'>
          <label className='form-label_'>Password</label>
          <input
            className='form-input_'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {formerrors.password && <p>{formerrors.password}</p>}
        </div>
        <div className='form-inputs_'>
          <label className='form-label_'>Confirm Password</label>
          <input
            className='form-input_'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {formerrors.password2 && <p>{formerrors.password2}</p>}
        </div>
        <div className='form-inputs_'>
          <label className='form-label_'>License Number</label>
          <input
            className='form-input_'
            type='text'
            name='license'
            placeholder='Enter License Number'
            value={values.license}
            onChange={handleChange}
          />
          {formerrors.license && <p>{formerrors.license}</p>}
        </div>
        <div className='form-inputs_'>
          <label className='form-label_'>Location</label>
          <input
            className='form-input_'
            type='text'
            name='location'
            placeholder='Enter Location'
            value={values.location}
            onChange={handleChange}
          />
          {formerrors.location && <p>{formerrors.location}</p>}
        </div>
        <Button className='form-input-btn' buttonSize='btn--wide' buttonColor='blue' type='submit'>
          Register
        </Button>
        {/* <button className='form-input-btn' type='submit'>
          Sign up
        </button> */}
        <span className='form-input-login_'>
          Already have an account? <Link to='/sign-in'>Login here</Link>
        </span>
      </form>
    </div>
  );
};

export default DoctorFormSignup;