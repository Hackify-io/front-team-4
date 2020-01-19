import { GET_CLINIC } from "./";
import ClinicService from "./../services/clinicService";

// Get Places
export const getClinic = id => {
  const clinic = ClinicService.getClinic(id);
  return {
    type: GET_CLINIC,
    payload: clinic
  };
};
