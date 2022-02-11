import { createContext, useReducer } from 'react';
import { IPost, IPostState } from '../../interfaces/interfaces';
import postReducer from './PostReducer';
import PostService from '../../services/post';
import Cookies from 'universal-cookie';
/*    *****************************  CONTEXT    *****************************     */
interface IPostContext {
  posts: IPost[];
  loading: boolean;
  error: string;
  getPosts: () => void;
}

const PostContext = createContext<IPostContext>({} as IPostContext); //

/*    *****************************  PROVIDER    *****************************     */
//Provider things
interface props {
  children: JSX.Element | JSX.Element[];
}

const initialtState: IPostState = {
  posts: [],
  loading: false,
  error: '',
};

export const PostProvider = ({ children }: props) => {
  const cookies = new Cookies();
  const [postsState, dispatch] = useReducer(postReducer, initialtState);

  const getPosts = async () => {
    dispatch({ type: 'SET_LOADING' });
    const jwt: string = cookies.get('JWT');
    try {
      const {
        data: { Data },
      } = await PostService.getAll(jwt);
      dispatch({ type: 'SET_POSTS', payload: Data });
      setTimeout(() => {
        if (!Data) {
          console.log(postsState.posts);
          console.log('pasa por aca el timeout');
          dispatch({ type: 'SET_ERROR', payload: 'Error getting the posts' });
        }
      }, 10000);
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error getting the posts' });
    }
  };

  return (
    <PostContext.Provider
      value={{
        ...postsState,
        getPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
