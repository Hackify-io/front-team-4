import Medical from './../api/Medical';

class UserService {
  static async login(login) {
    try {
      const loginResponse = await Medical.post('/logins/users', login);
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
        '/logins/users/register',
        register
      );
      return registerResponse;
    } catch (err) {
      return null;
    }
  }

  static async create(user) {
    console.log('user service', user);

    try {
      const createResponse = await Medical.post('/users', user);
      console.log(createResponse);
      return createResponse;
    } catch (err) {
      return null;
    }
  }
}

export default UserService;
