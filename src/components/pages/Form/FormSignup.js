import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Button } from '../../Button';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, formerrors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right-'>
      <form onSubmit={handleSubmit} className='form-' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs-'>
          <label className='form-label-'>Username</label>
          <input
            className='form-input-'
            type='text'
            name='username'
            placeholder='Enter your username'
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
        <div className='form-inputs-'>
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
        </div>
        <Button className='form-input-btn' buttonSize='btn--wide' buttonColor='blue' typle='submit'>
          Sign Up
        </Button>
        {/* <button className='form-input-btn' type='submit'>
          Sign up
        </button> */}
        <span className='form-input-login-'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;