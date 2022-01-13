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
    setLikedPost,
    setLikedComments,
    deleteAccount,
    userState,
  } = useContext(UserContext);

  return {
    ...userState,
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
