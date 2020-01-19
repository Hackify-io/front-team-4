import { GET_PROCEDURES } from "./";
import ProcedureService from "./../services/procedureService";

// Get Procedures
export const getProcedures = () => {
  const procedures = ProcedureService.getProcedures();
  return {
    type: GET_PROCEDURES,
    payload: procedures
  };
};
