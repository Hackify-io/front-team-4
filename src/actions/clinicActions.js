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

export const submitAppointment = (id, appointment) => async dispatch => {
  await ClinicService.submitAppointment(id, appointment);
  const appointments = await ClinicService.getAppointments(id);
  return dispatch({
    type: GET_APPOINTMENTS,
    payload: appointments
  });
};

export const getClinics = (procedure, place) => async dispatch => {
  const clinics = await ClinicService.getClinics(procedure, place);
  return dispatch({
    type: GET_FILTERED_CLINICS,
    payload: clinics
  });
};

export const addProcedureToClinic = (
  clinicId,
  procedureId
) => async dispatch => {
  const clinic = await ClinicService.addProcedure(clinicId, procedureId);
  return dispatch({
    type: GET_CLINIC,
    payload: clinic
  });
};

export const removeProcedureFromClinic = (
  clinicId,
  procedureId
) => async dispatch => {
  const clinic = await ClinicService.removeProcedure(clinicId, procedureId);
  return dispatch({
    type: GET_CLINIC,
    payload: clinic
  });
};

export const updateClinic = editedClinic => async dispatch => {
  const clinic = await ClinicService.edit(editedClinic);
  return dispatch({
    type: GET_CLINIC,
    payload: clinic
  });
};
