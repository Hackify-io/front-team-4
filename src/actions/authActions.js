import { SET_CURRENT_USER } from "./";

export const loginUser = loginData => async dispatch => {
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
  // Remove Token
  localStorage.removeItem("jwt");
  // Remove Auth Header
  setAuthToken(false);
  // Set the Auth State to Initial State
  dispatch(setCurrentUser({}));
};
