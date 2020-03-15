const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
  let error = {};

  //making sure the information we have is a string, or an empty string to use isEmpty
  data.name = !isEmpty(data.name) ? data.name : '';
  data.locations = !isEmpty(data.locations) ? data.locations : [];
  //creating error object
  if (Validator.isEmpty(data.name)) {
    error.name = 'Name field is required';
  }
  if (data.locations.length === 0) {
    error.locations = 'Track must contain locations';
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};
