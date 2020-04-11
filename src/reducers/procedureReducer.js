import { GET_PROCEDURES } from '../actions/';

const initialState = {
  procedures: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROCEDURES:
      return {
        ...state,
        procedures: action.payload,
      };
    default:
      return state;
  }
}
