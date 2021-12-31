import http from '../http-common';
import { urlBACKEND } from '../interfaces/interfaces';

const url: string = urlBACKEND;

class LikeServices {
  sendLikePost(idPost: string | undefined, jwt: string) {
    return http.post(
      url + `/post/${idPost}/like`,
      {},
      {
        headers: { Authorization: jwt },
      }
    );
  }

  deleteLikePost(idPost: string | undefined, jwt: string) {
    return http.delete(url + `/post/${idPost}/like`, {
      headers: { Authorization: jwt },
    });
  }

  sendLikeComment(
    idComment: string | undefined,
    idPost: string | undefined,
    jwt: string
  ) {
    return http.post(
      url + `/post/${idPost}/comment/${idComment}/like`,
      {},
      {
        headers: { Authorization: jwt },
      }
    );
  }

  deleteLikeComment(
    idComment: string | undefined,
    idPost: string | undefined,
    jwt: string
  ) {
    return http.delete(url + `/post/${idPost}/comment/${idComment}/like`, {
      headers: { Authorization: jwt },
    });
  }
}

export default new LikeServices();
