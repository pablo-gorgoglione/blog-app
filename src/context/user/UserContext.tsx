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
  deleteAccount: () => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: props) => {
  const cookies = new Cookies();
  const initialState: IUserState = {
    id: '',
    isLog: false,
    isLoading_User: true,
    username: '',
    likedPosts: [],
    likedComments: [],
  };

  const checkIsLog = () => {
    let jwt = cookies.get('JWT');
    if (!jwt) {
      dispatch({ type: 'SET_ISLOADING', payload: false });
      dispatch({ type: 'SET_ISLOG', payload: false });
      return;
    }
    UserService.getOne(jwt)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const { username, likedPosts, likedComments, _id } = data.Data;
          dispatch({ type: 'SET_USER_ID', payload: _id });
          dispatch({ type: 'SET_ISLOG', payload: true });
          dispatch({ type: 'SET_USERNAME', payload: username });
          dispatch({ type: 'SET_LIKEDPOSTS', payload: likedPosts });
          dispatch({ type: 'SET_LIKEDCOMMENTS', payload: likedComments });
          dispatch({ type: 'SET_ISLOADING', payload: false });
        }
      })
      .catch((e) => {
        dispatch({ type: 'SET_ISLOG', payload: false });
        dispatch({ type: 'SET_ISLOADING', payload: false });
        openSnackBar('error retrieving your data, please login again', true);
      });
  };
  //SnackBar hook
  const { openSnackBar } = useSnackBar();

  const [userState, dispatch] = useReducer(userReducer, initialState);

  const login = (user: IUser) => {
    UserService.login(user)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const { username, _id, token, likedPosts, likedComments } = data.Data;
          cookies.set('JWT', token, { path: '/' });
          dispatch({ type: 'SET_USER_ID', payload: _id });
          dispatch({ type: 'SET_ISLOG', payload: true });
          dispatch({ type: 'SET_USERNAME', payload: username });
          dispatch({ type: 'SET_LIKEDCOMMENTS', payload: likedComments });
          dispatch({ type: 'SET_LIKEDPOSTS', payload: likedPosts });
          dispatch({ type: 'SET_ISLOADING', payload: false });
          openSnackBar('Welcome ' + username, false);
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          openSnackBar(e.response.data.Message, true);
        }
      });
  };

  const register = (user: IUser) => {
    UserService.register(user)
      .then((res) => {
        if (res.status === 200) {
          openSnackBar('Successfully registered', false);
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          openSnackBar(e.response.Message, true);
        }
      });
  };

  const logout = () => {
    dispatch({ type: 'SET_ISLOG', payload: false });
    dispatch({ type: 'SET_USERNAME', payload: '' });
    dispatch({ type: 'SET_LIKEDPOSTS', payload: [] });
    dispatch({ type: 'SET_LIKEDCOMMENTS', payload: [] });
    dispatch({ type: 'SET_USER_ID', payload: '' });

    cookies.remove('JWT');
    openSnackBar('Logged out', false);
  };

  const changeUsername = (newusername: string) => {
    const jwt = cookies.get('JWT');
    UserService.changeUsername(newusername, jwt)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          openSnackBar('Username has been changed', false);
          dispatch({ type: 'SET_USERNAME', payload: newusername });
        }
      })
      .catch((e) => {
        openSnackBar(e.response.data.Message, true);
      });
  };

  const changePassword = (newpassword: string) => {
    const jwt = cookies.get('JWT');
    UserService.changePassword(newpassword, jwt)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          openSnackBar('Password has been changed', false);
        }
      })
      .catch((e) => {
        openSnackBar('Error, try again', true);
      });
  };

  const setLikedPost = (likedPosts: string[]) => {
    dispatch({ type: 'SET_LIKEDPOSTS', payload: likedPosts });
  };
  const setLikedComments = (likedComments: string[]) => {
    dispatch({ type: 'SET_LIKEDCOMMENTS', payload: likedComments });
  };

  const deleteAccount = () => {
    let jwt = cookies.get('JWT');
    UserService.deleteAccount(jwt)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          logout();
          openSnackBar('Your account has been successfully deleted', false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        register,
        login,
        deleteAccount,
        logout,
        checkIsLog,
        changePassword,
        changeUsername,
        setLikedPost,
        setLikedComments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
