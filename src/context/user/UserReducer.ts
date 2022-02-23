import { IUserState } from '../../interfaces/interfaces';
import user from '../../services/user';

export type IUserAction =
  | {
      type: 'SET_ISLOG';
      payload: boolean;
    }
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_ISLOADING'; payload: boolean }
  | { type: 'SET_LIKEDCOMMENTS'; payload: string[] }
  | { type: 'SET_USER_ID'; payload: string }
  | { type: 'SET_TOKEN'; payload: string }
  | { type: 'SET_LIKEDPOSTS'; payload: string[] }
  | { type: 'RESET'; payload: IUserState }
  | { type: 'SET_ISAUTHOR'; payload: boolean };

const userReducer = (state: IUserState, action: IUserAction): IUserState => {
  switch (action.type) {
    case 'SET_ISLOG':
      return {
        ...state,
        isLog: action.payload,
      };
    case 'SET_USERNAME':
      return { ...state, user: { ...state.user, username: action.payload } };
    case 'SET_TOKEN':
      return { ...state, user: { ...state.user, token: action.payload } };
    case 'SET_USER_ID':
      return { ...state, user: { ...state.user, id: action.payload } };
    case 'SET_LIKEDPOSTS':
      return { ...state, user: { ...state.user, likedPosts: action.payload } };
    case 'SET_LIKEDCOMMENTS':
      return {
        ...state,
        user: { ...state.user, likedComments: action.payload },
      };
    case 'SET_ISAUTHOR':
      return { ...state, user: { ...state.user, isAuthor: action.payload } };
    case 'SET_ISLOADING':
      return { ...state, loading: action.payload };
    case 'RESET':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
