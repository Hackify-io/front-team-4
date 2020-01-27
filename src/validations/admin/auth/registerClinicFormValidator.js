import validator from 'validator';
import { isRequired } from '../../is-empty';

export const validateRegisterClinicInput = data => {
  let errors = {};

  data.email = isRequired(data.email);
  data.password = isRequired(data.password);
  data.confirmPassword = isRequired(data.confirmPassword);
  data.name = isRequired(data.name);

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Password does not match';
  }

  if (validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Password field is required';
  }

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  return errors;
};
