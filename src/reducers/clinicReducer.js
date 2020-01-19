import { GET_CLINIC, GET_APPOINTMENTS } from "../actions/";

const initialState = {
  currentClinic: null,
  appointments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLINIC:
      return {
        ...state,
        currentClinic: action.payload
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload
      };
    default:
      return state;
  }
}
