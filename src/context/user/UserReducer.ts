import { IUserState } from '../../interfaces/interfaces';

export type IUserAction =
  | {
      type: 'SET_ISLOG';
      payload: boolean;
    }
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_ISLOADING'; payload: boolean }
  | { type: 'SET_LIKEDCOMMENTS'; payload: string[] }
  | { type: 'SET_USER_ID'; payload: string }
  | { type: 'SET_LIKEDPOSTS'; payload: string[] };

const userReducer = (state: IUserState, action: IUserAction): IUserState => {
  switch (action.type) {
    case 'SET_ISLOG':
      return {
        ...state,
        isLog: action.payload,
      };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_USER_ID':
      return { ...state, id: action.payload };
    case 'SET_LIKEDPOSTS':
      return { ...state, likedPosts: action.payload };
    case 'SET_LIKEDCOMMENTS':
      return { ...state, likedComments: action.payload };
    case 'SET_ISLOADING':
      return { ...state, isLoading_User: action.payload };
    default:
      return state;
  }
};

export default userReducer;
