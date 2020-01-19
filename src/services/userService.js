import Auth from "./../apis/Auth";

class UserService {
  static async login(login) {
    try {
      const loginResponse = await Auth.post("/logins/users", login);
      if (loginResponse.data.isSuccess) {
        return loginResponse.data.result;
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}

export default UserService;
