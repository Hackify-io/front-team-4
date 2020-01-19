import { GET_PLACES } from "../actions/";

const initialState = {
  places: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload
      };
    default:
      return state;
  }
}
