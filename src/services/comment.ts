import http from '../http-common';
import { urlBACKEND } from '../interfaces/interfaces';

const url: string = urlBACKEND;

class CommentServices {
  createOne(idPost: string | undefined, jwt: string, comment: string) {
    return http.post(
      url + `/user/post/${idPost}/comment`,
      { content: comment },
      {
        headers: { Authorization: jwt },
      }
    );
  }
  deleteOne(
    idPost: string | undefined,
    jwt: string,
    idComment: string | undefined
  ) {
    return http.delete(url + `/user/post/${idPost}/comment/${idComment}`, {
      headers: { Authorization: jwt },
    });
  }
  updateOne(
    idPost: string | undefined,
    jwt: string,
    idComment: string | undefined,
    comment: string
  ) {
    return http.put(
      url + `/user/post/${idPost}/comment/${idComment}`,
      { comment },
      { headers: { Authorization: jwt } }
    );
  }
}

export default new CommentServices();
