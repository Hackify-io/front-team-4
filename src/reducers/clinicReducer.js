import {
  GET_CLINIC,
  GET_APPOINTMENTS,
  GET_FILTERED_CLINICS,
  GET_FEATURED_CLINICS,
} from '../actions/';

const initialState = {
  currentClinic: null,
  appointments: [],
  filteredClinics: [],
  featuredClinics: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLINIC:
      return {
        ...state,
        currentClinic: action.payload,
      };
    case GET_FEATURED_CLINICS: {
      return {
        ...state,
        featuredClinics: action.payload,
      };
    }
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case GET_FILTERED_CLINICS:
      return {
        ...state,
        filteredClinics: action.payload,
      };
    default:
      return state;
  }
}
