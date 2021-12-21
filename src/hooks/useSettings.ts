import { useState, useEffect } from 'react';
import { useUser } from './useUser';
import { validatePassword, validateUsername } from '../utils/ValidateSettings';

interface IPasswordErrors {
  password: string;
  passRepeat: string;
}
export const useSettings = () => {
  const { changePassword, changeUsername } = useUser();

  //will be true the first time the use click the button, and when the fetch
  // is called, to use it again
  const [firstUsername, setFirstUsername] = useState<boolean>(true);
  const [firstPassword, setFirstPassword] = useState<boolean>(true);

  //if the operation is successful this will be set to true
  const [usernameSuccess, setUsernameSuccess] = useState<boolean>(false);
  const [passwordSuccess, setPasswordSuccess] = useState<boolean>(false);

  //username states
  const [username, setUsername] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');

  //password states
  const [passwordError, setpasswordError] = useState<IPasswordErrors>({
    password: '',
    passRepeat: '',
  });
  const [passwordValues, setPasswordValues] = useState<IPasswordErrors>({
    password: '',
    passRepeat: '',
  });

  // handle changes on inputs
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPasswordValues({
      ...passwordValues,
      [name]: value,
    });
  };

  // submits, validate the inputs values
  const handleUsernameSubmit = () => {
    setUsernameError(validateUsername(username));
    setFirstUsername(false);
  };

  const handlePasswordSubmit = () => {
    setpasswordError(validatePassword(passwordValues));
    setFirstPassword(false);
  };

  // will run the fetch to change data if error are empty ''
  //username
  useEffect(() => {
    if (!usernameError && username) {
      changeUsername(username);
      setUsername('');
      setUsernameSuccess(true);
      setFirstUsername(true);
    }
  }, [usernameError, firstUsername]);

  //password
  useEffect(() => {
    if (
      !passwordError.passRepeat &&
      !passwordError.password &&
      passwordValues.password
    ) {
      changePassword(passwordValues.password);
      setPasswordValues({ passRepeat: '', password: '' });
      setPasswordSuccess(true);
      console.log(passwordSuccess);
    }
  }, [passwordError, firstPassword]);

  return {
    handlePasswordSubmit,
    handleUsernameSubmit,
    handleChangeUsername,
    handleChangePassword,
    usernameSuccess,
    passwordSuccess,
    username,
    passwordValues,
    usernameError,
    passwordError,
  };
};
