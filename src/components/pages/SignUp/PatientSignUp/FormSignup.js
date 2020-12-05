import React from 'react';
//import {Link} from 'react-router-dom'
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Button } from '../../../Button';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, formerrors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right-'>
      <form onSubmit={handleSubmit} className='form-' noValidate>
        <h1>
          Get started with us today!
        </h1>
        <div className='form-inputs-'>
          <label className='form-label-'>Name</label>
          <input
            className='form-input-'
            type='text'
            name='username'
            placeholder='Enter your name'
            value={values.username}
            onChange={handleChange}
          />
          {formerrors.username && <p>{formerrors.username}</p>}
        </div>
        <div className='form-inputs-'>
          <label className='form-label-'>Email</label>
          <input
            className='form-input-'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {formerrors.email && <p>{formerrors.email}</p>}
        </div>
        {/* <div className='form-inputs-'>
          <label className='form-label-'>Password</label>
          <input
            className='form-input-'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {formerrors.password && <p>{formerrors.password}</p>}
        </div>
        <div className='form-inputs-'>
          <label className='form-label-'>Confirm Password</label>
          <input
            className='form-input-'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {formerrors.password2 && <p>{formerrors.password2}</p>}
        </div> */}
        {/* <div className='form-inputs-'>
          <label className='form-label-'>Location</label>
          <input
            className='form-input-'
            type='text'
            name='location'
            placeholder='Enter Location'
            value={values.location}
            onChange={handleChange}
          />
          {formerrors.location && <p>{formerrors.location}</p>}
        </div> */}
        <Button className='form-input-btn' buttonSize='btn--wide' buttonColor='blue'>
          Book
        </Button>
        {/* <button className='form-input-btn' type='submit'>
          Sign up
        </button> */}
        {/* <span className='form-input-login-'>
          Already have an account? <Link to='/sign-in'>Login here</Link> 
        </span> */}
      </form>
    </div>
  );
};

export default FormSignup;