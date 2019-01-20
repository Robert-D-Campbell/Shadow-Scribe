const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.firstName, { min: 2, max: 16 })) {
    errors.firstName = "First Name must be between 2 and 16 characters";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name is required";
  }
  if (!Validator.isLength(data.lastName, { min: 2, max: 16 })) {
    errors.lastName = "Last Name must be between 2 and 16 characters";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 18 })) {
    errors.password = "Password must be between 6 and 18 characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords do not match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
