import { createContext, useReducer } from 'react';
import { IPost, IPostState } from '../../interfaces/interfaces';
import postReducer from './PostReducer';
import PostService from '../../services/post';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useEffect } from 'react';
/*    *****************************  CONTEXT    *****************************     */
interface IPostContext {
  posts: IPost[];
  post: IPost;
  loading: boolean;
  loadingPost: boolean;
  error: string;
  getPosts: () => void;
  getPost: (id: string) => void;
}

const PostContext = createContext<IPostContext>({} as IPostContext); //

/*    *****************************  PROVIDER    *****************************     */
//Provider things
interface props {
  children: JSX.Element | JSX.Element[];
}

const initialtState: IPostState = {
  posts: [],
  post: {
    _id: '',
    title: '',
    content: '',
    datePublished: '',
    tags: [],
    isPublished: 0,
    likeCounter: 0,
    commentCounter: 0,
  },
  loading: false,
  loadingPost: false,
  error: '',
};

export const PostProvider = ({ children }: props) => {
  const cookies = new Cookies();
  const [postsState, dispatch] = useReducer(postReducer, initialtState);
  const jwt: string = cookies.get('JWT');

  const getPosts = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const {
        data: { Data },
      } = await PostService.getAll(jwt, true);
      dispatch({ type: 'SET_POSTS', payload: Data });
      setTimeout(() => {
        if (!Data) {
          dispatch({ type: 'SET_ERROR', payload: 'Error getting the posts' });
        }
      }, 10000);
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error getting the posts' });
    }
  };
  const getPost = async (id: string) => {
    dispatch({ type: 'SET_LOADING_POST', payload: true });
    try {
      const {
        data: { Data },
      } = await PostService.getOne(id, jwt);
      dispatch({ type: 'SET_POST', payload: Data });
      dispatch({ type: 'SET_LOADING_POST', payload: false });
    } catch (error) {
      dispatch({ type: 'SET_LOADING_POST', payload: false });

      if (axios.isAxiosError(error)) {
        console.log({ ...error });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <PostContext.Provider
      value={{
        ...postsState,
        getPosts,
        getPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
