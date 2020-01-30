import validator from 'validator';
import { isRequired } from '../is-empty';

export const validateRegisterUserInput = data => {
  let errors = {};

  data.email = isRequired(data.email);
  data.firstname = isRequired(data.firstname);
  data.lastname = isRequired(data.lastname);
  data.password = isRequired(data.password);
  data.confirmPassword = isRequired(data.confirmPassword);

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Invalid Email format';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Password does not match';
  }

  if (validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Password field is required';
  }

  if (validator.isEmpty(data.firstname)) {
    errors.firstname = 'Firstname field is required';
  }

  if (validator.isEmpty(data.lastname)) {
    errors.lastname = 'Lastname field is required';
  }

  //TODO
  //vaidations for number
  // if (validator.isEmpty(data.age)) {
  //   errors.age = 'Age field is required';
  // }

  // if (validator.isEmpty(data.gender)) {
  //   errors.gender = 'Gender field is required';
  // }

  return errors;
};
