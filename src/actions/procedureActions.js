import { GET_PROCEDURES } from "./";
import ProcedureService from "./../services/procedureService";

// Get Procedures
export const getProcedures = () => async dispatch => {
  const specialties = await ProcedureService.getProcedures();
  const appSpecialties = specialties
    ? specialties.map(s => {
        return {
          specialty: s,
          display: `${s.name}`
        };
      })
    : null;
  return dispatch({
    type: GET_PROCEDURES,
    payload: appSpecialties
  });
};
