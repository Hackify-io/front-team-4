import { SET_CURRENT_USER } from "./";

export const loginUser = loginData => dispatch => {
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