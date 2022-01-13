import http from '../http-common';
import { IUser } from '../interfaces/interfaces';
import { urlBACKEND } from '../interfaces/interfaces';

const url: string = urlBACKEND + '/user/';

class UserService {
  login(user: IUser) {
    const { password, username } = user;
    return http.post(url + 'login', {
      username,
      password,
    });
  }

  register(user: IUser) {
    const { password, username } = user;
    return http.post(url + 'register', {
      username,
      password,
    });
  }

  changeUsername(newusername: string, jwt: string) {
    return http.put(
      url + 'username',
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
      url + 'password',
      {
        newpassword,
      },
      {
        headers: { Authorization: jwt },
      }
    );
  }

  getOne(jwt: string) {
    return http.get(url, { headers: { Authorization: jwt } });
  }
  deleteAccount(jwt: string) {
    return http.delete(url, { headers: { Authorization: jwt } });
  }
}

export default new UserService();
