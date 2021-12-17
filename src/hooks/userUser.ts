import { useContext } from 'react';
import UserContext from '../context/user/UserContext';
export const useUser = () => {
  const { login, logout, checkIsLog, userState } = useContext(UserContext);
  const { isLog, username } = userState;
  return {
    isLog,
    username,
    login,
    logout,
    checkIsLog,
  };
};
