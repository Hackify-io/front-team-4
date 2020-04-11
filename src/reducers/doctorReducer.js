import { GET_DOCTORS, GET_FEATURED_DOCTORS } from "../actions/index";

const initialState = {
  doctors: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DOCTORS:
      return { ...state, doctors: action.payload };
    case GET_FEATURED_DOCTORS:
      return { ...state, featuredDoctors: action.payload };
    default:
      return state;
  }
}
