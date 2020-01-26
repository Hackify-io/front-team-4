import { GET_PROCEDURES } from './';
import ProcedureService from './../services/procedureService';

// Get Procedures
export const getProcedures = () => async dispatch => {
  const procedures = await ProcedureService.getProcedures();
  return dispatch({
    type: GET_PROCEDURES,
    payload: procedures
  });
};
