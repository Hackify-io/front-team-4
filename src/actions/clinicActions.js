import { GET_CLINIC, GET_APPOINTMENTS, GET_FILTERED_CLINICS } from './';
import ClinicService from './../services/clinicService';

// Get Clinics
export const getClinic = id => async dispatch => {
  const clinic = await ClinicService.getClinic(id);
  return dispatch({
    type: GET_CLINIC,
    payload: clinic
  });
};

// Get Appointments
export const getAppointments = id => {
  const appointments = ClinicService.getAppointments(id);
  return {
    type: GET_APPOINTMENTS,
    payload: appointments
  };
};

export const submitAppointment = appointment => {
  ClinicService.submitAppointment(appointment);
};

export const getClinics = (procedure, place) => {
  const clinics = ClinicService.getClinics(procedure, place);
  return {
    type: GET_FILTERED_CLINICS,
    payload: clinics
  };
};
