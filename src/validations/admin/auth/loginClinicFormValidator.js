import validator from 'validator';
import { isRequired } from '../../is-empty';

export const validateLoginClinicInput = data => {
  let errors = {};

  data.username = isRequired(data.username);
  data.password = isRequired(data.password);

  if (validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return errors;
};
