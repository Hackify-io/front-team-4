import { GET_CLINIC, GET_APPOINTMENTS } from "./";
import ClinicService from "./../services/clinicService";

// Get Clinics
export const getClinic = id => {
  const clinic = ClinicService.getClinic(id);
  return {
    type: GET_CLINIC,
    payload: clinic
  };
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
