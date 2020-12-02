export default function validateInfo(values) {
    let formerrors = {};
  
    if (!values.username.trim()) {
      formerrors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      formerrors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      formerrors.email = 'Email address is invalid';
    }
    if (!values.password) {
      formerrors.password = 'Password is required';
    } else if (values.password.length < 6) {
      formerrors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      formerrors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      formerrors.password2 = 'Passwords do not match';
    }
    return formerrors;
  }