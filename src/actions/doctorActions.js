import { GET_DOCTORS, GET_FEATURED_DOCTORS } from "./index";
import DoctorService from "./../services/doctorService";

export const getDoctors = () => async dispatch => {
  const doctors = await DoctorService.getDoctors();
  const appDoctors = doctors
    ? doctors.map(d => {
        return {
          name: d.name,
          degree: d.degree,
          picture: d.pictureUrl,
          expertise: d.expertiseTime
        };
      })
    : null;
  dispatch({
    type: GET_DOCTORS,
    payload: appDoctors
  });
};

export const getFeaturedDoctors = () => async dispatch => {
  const doctors = await DoctorService.getFeaturedDoctors();
  const appDoctors = doctors
    ? doctors.map(d => {
        return {
          name: d.name,
          degree: d.degree,
          pic: d.pictureUrl,
          expertise: d.expertiseTime
        };
      })
    : null;
  dispatch({
    type: GET_FEATURED_DOCTORS,
    payload: appDoctors
  });
};
