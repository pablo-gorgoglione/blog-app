import http from '../http-common';
import { IUser } from '../interfaces/interfaces';

class UserService {
  login(user: IUser) {
    const { password, username } = user;
    return http.post('/user/login', {
      username,
      password,
    });
  }

  register(user: IUser) {
    const { password, username } = user;
    return http.post('/user/register', {
      username,
      password,
    });
  }

  changeUsername(newusername: string, jwt: string) {
    return http.put(
      '/user/username',
      {
        newusername,
      },
      {
        headers: { Authorization: jwt },
      }
    );
  }

  changePassword(newpassword: string, jwt: string) {
    return http.put(
      '/user/password',
      {
        newpassword,
      },
      {
        headers: { Authorization: jwt },
      }
    );
  }
}
export default new UserService();
