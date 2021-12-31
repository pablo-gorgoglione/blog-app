import http from '../http-common';
import { IUser } from '../interfaces/interfaces';

const url: string = 'https://blog-api-pablogorgoglione.herokuapp.com';
class UserService {
  login(user: IUser) {
    const { password, username } = user;
    return http.post(url + '/user/login', {
      username,
      password,
    });
  }

  register(user: IUser) {
    const { password, username } = user;
    return http.post(url + '/user/register', {
      username,
      password,
    });
  }

  changeUsername(newusername: string, jwt: string) {
    return http.put(
      url + '/user/username',
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
      url + '/user/password',
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
