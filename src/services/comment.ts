import http from '../http-common';
const url: string = 'https://blog-api-pablogorgoglione.herokuapp.com';

class CommentServices {
  createOne(idPost: string | undefined, jwt: string, comment: string) {
    return http.post(
      url + `/post/${idPost}/comment`,
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
    return http.delete(url + `/post/${idPost}/comment/${idComment}`, {
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
      url + `/post/${idPost}/comment/${idComment}`,
      { comment },
      { headers: { Authorization: jwt } }
    );
  }
}

export default new CommentServices();
