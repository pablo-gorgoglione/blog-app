import { createContext, useReducer } from 'react';
import { IUserState, IUser } from '../../interfaces/interfaces';
import UserService from '../../services/user';
import userReducer from './UserReducer';
import Cookies from 'universal-cookie';
import { useSnackBar } from '../../hooks/useSnackBar';

interface IUserContext {
  userState: IUserState;
  login: (user: IUser) => void;
  logout: () => void;
  checkIsLog: () => void;
  register: (user: IUser) => void;
  changePassword: (newpassword: string) => void;
  changeUsername: (newusername: string) => void;
  setLikedPost: (likedPosts: string[]) => void;
  setLikedComments: (likedComments: string[]) => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: props) => {
  const cookies = new Cookies();
  const initialState: IUserState = {
    isLog: false,
    isLoading: true,
    username: '',
    likedPosts: [],
    likedComments: [],
  };

  //SnackBar hook
  const { openSnackBar } = useSnackBar();

  const [userState, dispatch] = useReducer(userReducer, initialState);

  const login = async (user: IUser) => {
    const data = await UserService.login(user);
    if (data.data.Data) {
      let likedPosts: string[] = data.data.Data.likedPosts;
      let likedComments: string[] = data.data.Data.likedComments;
      let username: string = data.data.Data.username;
      let jwt: string = data.data.Data.token;
      cookies.set('userId', data.data.Data._id, { path: '/' });
      cookies.set('username', username, { path: '/' });
      cookies.set('userInfo', jwt, { path: '/' });
      dispatch({ type: 'SET_ISLOG', payload: true });
      dispatch({ type: 'SET_USERNAME', payload: username });
      dispatch({ type: 'SET_LIKEDCOMMENTS', payload: likedComments });
      dispatch({ type: 'SET_LIKEDPOSTS', payload: likedPosts });
      dispatch({ type: 'SET_ISLOADING', payload: false });
      openSnackBar('Welcome ' + username, false);
    }
  };

  const register = async (user: IUser) => {
    await UserService.register(user).catch((err) => {
      if (err.response.status === 400) {
        // status code response
        openSnackBar('Username already exist', true);
      }
    });
  };

  const logout = () => {
    dispatch({ type: 'SET_ISLOG', payload: false });
    dispatch({ type: 'SET_USERNAME', payload: '' });
    dispatch({ type: 'SET_LIKEDPOSTS', payload: [] });
    dispatch({ type: 'SET_LIKEDCOMMENTS', payload: [] });

    cookies.remove('userInfo');
    cookies.remove('username');
    cookies.remove('userId');
    openSnackBar('Logged out', false);
  };

  const changeUsername = async (newusername: string) => {
    const jwt: string = cookies.get('userInfo');
    try {
      const data = await UserService.changeUsername(newusername, jwt).catch(
        (err) => {
          openSnackBar(err.response.data.Message, true);
        }
      );
      if (data) {
        if (data.data.Success === 1) {
          cookies.set('username', newusername, { path: '/' });
          const username = newusername;
          openSnackBar('Username has been changed', false);
          dispatch({ type: 'SET_USERNAME', payload: username });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async (newpassword: string) => {
    const jwt: string = cookies.get('userInfo');
    const data = await UserService.changePassword(newpassword, jwt);
    if (data.data.Data) {
      openSnackBar('Password has been changed', false);
    }
  };

  const checkIsLog = async () => {
    let jwt = cookies.get('userInfo');
    let user_id = cookies.get('userId');
    if (jwt) {
      dispatch({ type: 'SET_ISLOG', payload: true });
    }
    if (jwt && user_id) {
      try {
        const user = await UserService.getOne(user_id, jwt);
        if (user.data.Data) {
          let { username, likedPosts, likedComments } = user.data.Data;
          dispatch({ type: 'SET_ISLOG', payload: true });
          dispatch({ type: 'SET_USERNAME', payload: username });
          dispatch({ type: 'SET_LIKEDPOSTS', payload: likedPosts });
          dispatch({ type: 'SET_LIKEDCOMMENTS', payload: likedComments });
          dispatch({ type: 'SET_ISLOADING', payload: false });
        }
      } catch (error) {
        openSnackBar('error retrieving your data, please login again', true);
        dispatch({ type: 'SET_ISLOG', payload: false });
      }
    } else {
      dispatch({ type: 'SET_ISLOG', payload: false });
    }
  };

  const setLikedPost = async (likedPosts: string[]) => {
    dispatch({ type: 'SET_LIKEDPOSTS', payload: likedPosts });
  };
  const setLikedComments = async (likedComments: string[]) => {
    dispatch({ type: 'SET_LIKEDCOMMENTS', payload: likedComments });
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
        setLikedPost,
        setLikedComments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
