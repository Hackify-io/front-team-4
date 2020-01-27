import { SET_CURRENT_USER } from './';
import UserService from './../services/userService';
import setAuthToken from './../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const loginUser = loginData => async dispatch => {
  let loginResponse = await UserService.login(loginData);
  if (loginResponse) {
    const token = loginResponse;
    // Save Token
    localStorage.setItem('jwt', token);
    // Set token to Auth Header
    setAuthToken(token);
    // Decode Token to get Data
    const decoded = jwt_decode(token);
    const { id, role, email } = decoded;
    const user = {
      id: id,
      role: role,
      name: email,
      lastname: email
    };
    dispatch(setCurrentUser(user));
  }
};

export const loginClinic = loginData => async dispatch => {
  let loginResponse = await UserService.login(loginData);
  if (loginResponse) {
    const token = loginResponse;
    // Save Token
    localStorage.setItem('jwt', token);
    // Set token to Auth Header
    setAuthToken(token);
    // Decode Token to get Data
    const decoded = jwt_decode(token);
    const { id, role, email } = decoded;
    const user = {
      id: id,
      role: role,
      name: email,
      lastname: email
    };
    dispatch(setCurrentUser(user));
  }
};
// Set Logged in User
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

// Log out user
export const logoutUser = () => dispatch => {
  // Set the Auth State to Initial State
  localStorage.removeItem('jwt');
  dispatch(setCurrentUser({}));
};

export const register = register => async dispatch => {
  await UserService.register(register);
};
