import { SET_CURRENT_USER } from './';
import UserService from './../services/userService';
import ClinicService from './../services/clinicService';
import setAuthToken from './../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const loginUser = (loginData) => async (dispatch) => {
  let loginResponse = await UserService.login(loginData);
  if (loginResponse) {
    const token = loginResponse;
    // Save Token
    localStorage.setItem('jwt', token);
    // Set token to Auth Header
    setAuthToken(token);
    // Decode Token to get Data
    const decoded = jwt_decode(token);
    //Set User and isAuthenticated
    const { email, id, role, userData } = decoded;
    console.log(userData);
    const user = {
      id,
      role,
      email,
      name: userData.name,
      data: userData,
    };
    dispatch(setCurrentUser(user));
  }
};

export const partialSocialLogin = (authUser) => async (dispatch) => {
  const { uid, displayName, email, photoURL } = authUser;
  const user = {
    id: uid,
    role: 'PartialUser',
    email: email,
    name: displayName,
    data: {
      id: uid,
      name: displayName,
      lastname: displayName,
      avatar: photoURL,
    },
  };
  dispatch(setCurrentUser(user));
};

export const loginClinic = (loginData) => async (dispatch) => {
  let loginResponse = await ClinicService.login(loginData);
  if (loginResponse) {
    const token = loginResponse;
    // Save Token
    localStorage.setItem('jwt', token);
    // Set token to Auth Header
    setAuthToken(token);
    // Decode Token to get Data
    const decoded = jwt_decode(token);
    const { id, clinicId, role, email } = decoded;
    const user = {
      id: id,
      clinicId: clinicId,
      role: role,
      name: email,
      lastname: email,
    };
    dispatch(setCurrentUser(user));
  }
};
// Set Logged in User
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

// Log out user
export const logoutUser = () => (dispatch) => {
  // Set the Auth State to Initial State
  localStorage.removeItem('jwt');
  dispatch(setCurrentUser({}));
};

export const registerUser = (register) => async (dispatch) => {
  const registerResponse = await UserService.register(register);
  const newUser = {
    loginId: registerResponse.data.result._id,
    name: register.firstname,
    lastname: register.lastname,
    age: register.age,
    gender: register.gender,
    createdUser: register.firstname,
  };
  await UserService.create(newUser);
  localStorage.removeItem('jwt');
};

export const registerClinic = (register) => async (dispatch) => {
  const registerResponse = await ClinicService.register(register);
  const newClinic = {
    loginId: registerResponse.data.result._id,
    name: register.name,
    createdUser: register.name,
  };
  await ClinicService.create(newClinic);
  localStorage.setItem('jwt', '');
  dispatch(setCurrentUser({}));
};
