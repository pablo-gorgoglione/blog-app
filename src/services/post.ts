import http from '../http-common';
import { IPost, PostCreate, urlBACKEND } from '../interfaces/interfaces';

const url: string = urlBACKEND;

class PostService {
  //AUTHOR
  createOne(jwt: string, post: PostCreate) {
    return http.post(
      url + `/author/post/`,
      { ...post },
      {
        headers: { Authorization: jwt },
      }
    );
  }

  getAll(jwt: string, published: boolean) {
    if (!published) {
      //AUTHOR
      return http.get(url + '/author/post/', {
        headers: { Authorization: jwt },
      });
    } else {
      //WITHOUT AUTH
      return http.get(url + '/post');
    }
  }

  //AUTHOR
  updateOne(idPost: string, jwt: string, post: IPost) {
    return http.put(url + `/author/post/${idPost}`, post, {
      headers: { Authorization: jwt },
    });
  }

  //AUTHOR
  deleteOne(idPost: string, jwt: string) {
    return http.delete(url + `/author/post/${idPost}`, {
      headers: { Authorization: jwt },
    });
  }

  //WITHOUT AUTH
  getOne(idPost: string | undefined, jwt: string) {
    return http.get(url + `/post/${idPost}`);
  }

  //WITHOUT AUTH
  getAllComments(idPost: string | undefined, jwt: string) {
    return http.get(url + `/post/${idPost}/comment`);
  }
}

export default new PostService();
