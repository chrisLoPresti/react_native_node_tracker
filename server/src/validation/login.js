const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
  let error = {};

  //making sure the information we have is a string, or an empty string to use isEmpty
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  //creating error object
  if (!Validator.isEmail(data.email)) {
    error.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.email)) {
    error.email = 'Email field is required';
  }
  if (Validator.isEmpty(data.password)) {
    error.password = 'Password field is required';
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};
