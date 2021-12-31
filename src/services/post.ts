import http from '../http-common';
import { urlBACKEND } from '../interfaces/interfaces';

const url: string = urlBACKEND;

class PostService {
  getAll(jwt: string) {
    return http.get(url + '/post', {
      headers: { Authorization: jwt },
    });
  }

  getOne(idPost: string | undefined, jwt: string) {
    return http.get(url + `/post/${idPost}`, {
      headers: { Authorization: jwt },
    });
  }

  getAllComments(idPost: string | undefined, jwt: string) {
    return http.get(url + `/post/${idPost}/comment`, {
      headers: { Authorization: jwt },
    });
  }
}

export default new PostService();
