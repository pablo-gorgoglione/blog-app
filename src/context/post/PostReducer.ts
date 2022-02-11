import { IPost, IPostState } from '../../interfaces/interfaces';

export type PostsAction =
  | { type: 'SET_POSTS'; payload: IPost[] }
  | { type: 'SET_LOADING' }
  | { type: 'SET_ERROR'; payload: string };

const postReducer = (state: IPostState, action: PostsAction): IPostState => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        posts: action.payload,
        loading: false,
        error: '',
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
