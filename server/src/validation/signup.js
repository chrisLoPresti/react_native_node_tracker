const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
  let error = {};

  //making sure the information we have is a string, or an empty string to use isEmpty
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.verifyPassword = !isEmpty(data.verifyPassword)
    ? data.verifyPassword
    : '';

  //creating error object
  if (Validator.isEmpty(data.email)) {
    error.email = 'Email field is required';
  }
  if (!Validator.isEmail(data.email)) {
    error.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    error.password = 'Password field is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    error.password = 'Password must be between 6 and 30 characters';
  }
  if (Validator.isEmpty(data.verifyPassword)) {
    error.verifyPassword = 'Confirm Password field is required';
  }
  if (!Validator.equals(data.password, data.verifyPassword)) {
    error.verifyPassword = 'Passwords do not match';
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};
