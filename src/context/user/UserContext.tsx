import { createContext, useReducer } from 'react';
import { IUserState, IUser } from '../../interfaces/interfaces';
import UserService from '../../services/user';
import userReducer from './UserReducer';
import Cookies from 'universal-cookie';
import { useSnackBar } from '../../hooks/useSnackBar';
import { useEffect } from 'react';

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
    loading: false,
    error: '',
    isLog: false,
    user: {
      id: '',
      username: '',
      isAuthor: false,
      likedPosts: [],
      likedComments: [],
      token: '',
    },
  };

  const { openSnackBar } = useSnackBar();

  const [userState, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    checkIsLog();
  }, []);

  const checkIsLog = async () => {
    dispatch({ type: 'SET_ISLOADING', payload: true });
    const jwt = cookies.get('JWT');
    if (!jwt) {
      dispatch({ type: 'SET_ISLOADING', payload: false });
      dispatch({ type: 'RESET', payload: initialState });
      return;
    }
    try {
      const {
        status,
        data: { Data: userData },
      } = await UserService.getOne(jwt);
      if (status === 200) {
        const { username, likedPosts, likedComments, _id, role } = userData;
        dispatch({ type: 'SET_USER_ID', payload: _id });
        dispatch({ type: 'SET_ISLOG', payload: true });
        dispatch({ type: 'SET_USERNAME', payload: username });
        dispatch({ type: 'SET_LIKEDPOSTS', payload: likedPosts });
        dispatch({ type: 'SET_LIKEDCOMMENTS', payload: likedComments });
        dispatch({ type: 'SET_TOKEN', payload: jwt });
        if (role === 1) {
          dispatch({ type: 'SET_ISAUTHOR', payload: true });
        } else {
          dispatch({ type: 'SET_ISAUTHOR', payload: false });
        }
        dispatch({ type: 'SET_ISLOADING', payload: false });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'RESET',
        payload: { ...initialState, loading: false },
      });
      openSnackBar('error retrieving your data, please login again', true);
      cookies.remove('JWT');
    }
  };

  const login = (user: IUser) => {
    UserService.login(user)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const { username, _id, token, likedPosts, likedComments, role } =
            data.Data;
          cookies.set('JWT', token, { path: '/' });
          dispatch({ type: 'SET_USER_ID', payload: _id });
          dispatch({ type: 'SET_ISLOG', payload: true });
          dispatch({ type: 'SET_USERNAME', payload: username });
          dispatch({ type: 'SET_LIKEDCOMMENTS', payload: likedComments });
          dispatch({ type: 'SET_LIKEDPOSTS', payload: likedPosts });
          dispatch({ type: 'SET_ISLOADING', payload: false });
          if (role === 1) {
            dispatch({ type: 'SET_ISAUTHOR', payload: true });
          }
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
    cookies.set('JWT', '');
    dispatch({ type: 'RESET', payload: { ...initialState, loading: false } });
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
