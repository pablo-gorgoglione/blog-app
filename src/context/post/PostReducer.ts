import { IComment, IPost, IPostState } from '../../interfaces/interfaces';

type PostsAction =
  | { type: 'SET_POSTS'; payload: IPost[] }
  | { type: 'SET_COMMENTS'; payload: IComment[] }
  | { type: 'SET_POST'; payload: IPost };

const postReducer = (state: IPostState, action: PostsAction): IPostState => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
