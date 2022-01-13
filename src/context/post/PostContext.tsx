import { createContext, useReducer } from 'react';
import { IPostState } from '../../interfaces/interfaces';
import PostService from '../../services/post';
import Cookies from 'universal-cookie';
import postReducer from './PostReducer';

/*    *****************************  CONTEXT    *****************************     */
interface IPostContext {
  postsState: IPostState;
  getAllPost: () => void;
}
const PostContext = createContext<IPostContext>({} as IPostContext); // {} as IPostContext, cuando lo consumas va a ser todo de ese tipo.

/*    *****************************  PROVIDER    *****************************     */
//Provider things
interface props {
  children: JSX.Element | JSX.Element[];
}

export const PostProvider = ({ children }: props) => {
  const cookies = new Cookies();
  //const [posts, setPosts] = useState<IPost[]>([]);
  const initialtState: IPostState = {
    posts: [],
  };

  const [postsState, dispatch] = useReducer(postReducer, initialtState); //cuando use el state

  const getAllPost = () => {
    const jwt: string = cookies.get('JWT');
    PostService.getAll(jwt)
      .then((res) => {
        const { Data } = res.data;
        dispatch({
          type: 'SET_POSTS',
          payload: Data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <PostContext.Provider
      value={{
        postsState,
        getAllPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
