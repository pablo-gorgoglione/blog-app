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
}
export default new UserService();
