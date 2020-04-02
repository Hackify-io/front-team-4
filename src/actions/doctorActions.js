import { GET_DOCTORS } from "./index";
import DoctorService from "./../services/doctorService";

export const getDoctors = () => async dispatch => {
  const doctors = await DoctorService.getFeaturedDoctors();
  const appDoctors = doctors
    ? doctors.map(d => {
        return {
          doctorName: d.name,
          doctorDegree: d.degree,
          doctorPic: d.pictureUrl,
          doctorExpertise: d.expertiseTime
        };
      })
    : null;
  dispatch({
    type: GET_DOCTORS,
    payload: appDoctors
  });
};
