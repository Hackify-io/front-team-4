import Medical from "./../api/Medical";

class UserService {
  static async login(login) {
    try {
      const loginResponse = await Medical.post("/logins/users", login);
      if (loginResponse.data.isSuccess) {
        return loginResponse.data.result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }

  static async register(register) {
    try {
      const registerResponse = await Medical.post(
        "/logins/users/register",
        register
      );
      return registerResponse;
    } catch (err) {
      return null;
    }
  }
}

export default UserService;
