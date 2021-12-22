import { createContext, useReducer } from 'react';
import { IUserState, IUser } from '../../interfaces/interfaces';
import UserService from '../../services/user';
import userReducer from './UserReducer';
import Cookies from 'universal-cookie';

interface IUserContext {
  userState: IUserState;
  login: (user: IUser) => void;
  logout: () => void;
  checkIsLog: () => void;
  register: (user: IUser) => void;
  changePassword: (newpassword: string) => void;
  changeUsername: (newusername: string) => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: props) => {
  const cookies = new Cookies();
  const initialState: IUserState = {
    username: '',
    isLog: false,
  };

  const [userState, dispatch] = useReducer(userReducer, initialState);

  const login = async (user: IUser) => {
    const data = await UserService.login(user);
    if (data.data.Data) {
      let username: string = data.data.Data.username;
      let jwt: string = data.data.Data.token;
      console.log('id: ' + data.data.Data._id);
      cookies.set('userId', data.data.Data._id, { path: '/' });
      cookies.set('username', username, { path: '/' });
      cookies.set('userInfo', jwt, { path: '/' });
      dispatch({ type: 'SET_ISLOG', payload: true });
      dispatch({ type: 'SET_USERNAME', payload: username });
    }
  };

  const register = async (user: IUser) => {
    const data = await UserService.register(user);
    if (data.data.Data.user) {
      console.log(data.data.Data.user);
    }
  };

  const logout = () => {
    dispatch({ type: 'SET_ISLOG', payload: false });
    dispatch({ type: 'SET_USERNAME', payload: '' });
    cookies.remove('userInfo');
    cookies.remove('username');
    cookies.remove('userId');
  };

  const changeUsername = async (newusername: string) => {
    const jwt: string = cookies.get('userInfo');
    const data = await UserService.changeUsername(newusername, jwt);
    if (data.data.Data) {
      cookies.set('username', newusername, { path: '/' });
      const username = newusername;
      dispatch({ type: 'SET_USERNAME', payload: username });
      console.log(data.data.Data);
    }
  };

  const changePassword = async (newpassword: string) => {
    const jwt: string = cookies.get('userInfo');
    const data = await UserService.changePassword(newpassword, jwt);
    if (data.data.Data) {
      console.log(data.data.Data);
    }
  };

  const checkIsLog = () => {
    let logged = cookies.get('userInfo');
    let username = cookies.get('username');
    if (logged) {
      dispatch({ type: 'SET_ISLOG', payload: true });
      dispatch({ type: 'SET_USERNAME', payload: username });
    } else {
      dispatch({ type: 'SET_ISLOG', payload: false });
    }
  };

  return (
    <UserContext.Provider
      value={{
        register,
        login,
        logout,
        checkIsLog,
        changePassword,
        changeUsername,
        userState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
