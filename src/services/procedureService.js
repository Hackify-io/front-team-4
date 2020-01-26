import Medical from './../api/Medical';

class ProcedureService {
  static async getProcedures() {
    try {
      const proceduresResponse = await Medical.get('/procedures');
      if (proceduresResponse.data.isSuccess) {
        return proceduresResponse.data.result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default ProcedureService;
