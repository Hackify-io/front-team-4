import { combineReducers } from "redux";
import authReducer from "./authReducer";
import placeReducer from "./placeReducer";
import procedureReducer from "./procedureReducer";
import clinicReducer from "./clinicReducer";
import doctorReducer from "./doctorReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  place: placeReducer,
  procedure: procedureReducer,
  clinic: clinicReducer,
  form: formReducer,
  doctors: doctorReducer
});
