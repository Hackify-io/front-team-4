import validator from 'validator';
import { isRequired } from '../is-empty';

export const validateLoginInput = (data) => {
  let errors = {};

  data.email = isRequired(data.email);
  data.password = isRequired(data.password);

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return errors;
};
