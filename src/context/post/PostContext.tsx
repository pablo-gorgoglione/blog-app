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

  const jwt: string = cookies.get('userInfo');

  const getAllPost = async () => {
    const data = await PostService.getAll(jwt).catch((err) => {
      console.log(err);
    });

    if (data) {
      if (data.data.Data) {
        let posts = data.data.Data;
        dispatch({
          type: 'SET_POSTS',
          payload: posts,
        });
      }
    }
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
