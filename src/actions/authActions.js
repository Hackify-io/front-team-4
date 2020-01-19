import { SET_CURRENT_USER } from "./";
import UserService from "./../services/userService";

export const loginUser = loginData => async dispatch => {
  //let token = await UserService.login(loginData);
  //console.log(token);
  let logedUser = {
    name: "Jhonnatan",
    lastname: "Guerrero"
  };
  dispatch(setCurrentUser(logedUser));
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
  dispatch(setCurrentUser({}));
};

export const register = register => async dispatch => {
  await UserService.register(register);
};
