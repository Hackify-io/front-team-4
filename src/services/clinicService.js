import Auth from "./../apis/Auth";

class ClinicService {
  static async login(login) {
    try {
      const loginResponse = await Auth.post("/logins/clinic", login);
      if (loginResponse.data.isSuccess) {
        return loginResponse.data.result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default ClinicService;
