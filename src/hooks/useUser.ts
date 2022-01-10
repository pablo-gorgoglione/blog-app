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
    setLikedComments,
    deleteAccount,
  } = useContext(UserContext);
  const { isLog, isLoading, username, likedPosts, likedComments } = userState;

  return {
    isLog,
    isLoading,
    username,
    likedPosts,
    likedComments,
    changePassword,
    deleteAccount,
    changeUsername,
    login,
    register,
    logout,
    checkIsLog,
    setLikedPost,
    setLikedComments,
  };
};
