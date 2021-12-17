import http from '../http-common';

class PostService {
  getAll(jwt: string) {
    return http.get('/post', {
      headers: { Authorization: jwt },
    });
  }

  getOne(idPost: string | undefined, jwt: string) {
    return http.get(`/post/${idPost}`, {
      headers: { Authorization: jwt },
    });
  }

  getAllComments(idPost: string | undefined, jwt: string) {
    return http.get(`/post/${idPost}/comment`, {
      headers: { Authorization: jwt },
    });
  }
}

export default new PostService();
