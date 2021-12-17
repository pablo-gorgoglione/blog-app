import { IUserState } from '../../interfaces/interfaces';

type UserAction =
  | {
      type: 'SET_ISLOG';
      payload: boolean;
    }
  | { type: 'SET_USERNAME'; payload: string };

const userReducer = (state: IUserState, action: UserAction): IUserState => {
  switch (action.type) {
    case 'SET_ISLOG':
      return {
        ...state,
        isLog: action.payload,
      };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };

    default:
      return state;
  }
};

export default userReducer;
