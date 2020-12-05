import { useState, useEffect } from 'react';

const useFormSignIn = (callback, validate) => {
  const [values, setValues] = useState({
    //username: '',
    email: '',
    password: '',
    //password2: ''
    loggedIn:''
  });
  const [formerrors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(formerrors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [formerrors]
  );

  return { handleChange, handleSubmit, values, formerrors };
};

export default useFormSignIn;
