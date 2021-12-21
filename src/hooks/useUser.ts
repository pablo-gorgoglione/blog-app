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
  } = useContext(UserContext);
  const { isLog, username } = userState;

  return {
    isLog,
    username,
    changePassword,
    changeUsername,
    login,
    register,
    logout,
    checkIsLog,
  };
};
