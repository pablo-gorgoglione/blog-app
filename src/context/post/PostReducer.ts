import { IPost, IPostState } from '../../interfaces/interfaces';

export type PostsAction =
  | { type: 'SET_POSTS'; payload: IPost[] }
  | { type: 'SET_LOADING' }
  | { type: 'SET_POST'; payload: IPost }
  | { type: 'SET_LOADING_POST'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string };

const postReducer = (state: IPostState, action: PostsAction): IPostState => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
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
    case 'SET_POST':
      return {
        ...state,
        post: action.payload,
      };
    case 'SET_LOADING_POST':
      return {
        ...state,
        loadingPost: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
