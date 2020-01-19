import { GET_CLINIC } from "../actions/";

const initialState = {
  currentClinic: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLINIC:
      return {
        ...state,
        currentClinic: action.payload
      };
    default:
      return state;
  }
}
