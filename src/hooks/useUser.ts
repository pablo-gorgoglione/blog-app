import { useContext } from 'react';
import UserContext from '../context/user/UserContext';

export const useUser = () => {
  const { login, register, logout, checkIsLog, userState } =
    useContext(UserContext);
  const { isLog, username } = userState;
  return {
    isLog,
    username,
    login,
    register,
    logout,
    checkIsLog,
  };
};
