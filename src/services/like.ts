import http from '../http-common';

class LikeServices {
  sendLikePost(idPost: string | undefined, jwt: string) {
    return http.post(
      `/post/${idPost}/like`,
      {},
      {
        headers: { Authorization: jwt },
      }
    );
  }

  deleteLikePost(idPost: string | undefined, jwt: string) {
    return http.delete(`/post/${idPost}/like`, {
      headers: { Authorization: jwt },
    });
  }

  sendLikeComment(
    idComment: string | undefined,
    idPost: string | undefined,
    jwt: string
  ) {
    return http.post(
      `/post/${idPost}/${idComment}/like`,
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
    return http.post(
      `/post/${idPost}/${idComment}/like`,
      {},
      {
        headers: { Authorization: jwt },
      }
    );
  }
}

export default new LikeServices();
