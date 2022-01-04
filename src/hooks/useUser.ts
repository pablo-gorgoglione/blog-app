import { useContext } from 'react';
import UserContext from '../context/user/UserContext';

export const useUser = () => {
  const {
    login,
    register,
    logout,
    checkIsLog,
    changePassword,
    changeUsername,
    userState,
    setLikedPost,
  } = useContext(UserContext);
  const { isLog, isLoading, username, likedPost } = userState;

  return {
    isLog,
    isLoading,
    username,
    likedPost,
    changePassword,
    changeUsername,
    login,
    register,
    logout,
    checkIsLog,
    setLikedPost,
  };
};
