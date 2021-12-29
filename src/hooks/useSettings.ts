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
  const handleUsernameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    }
  }, [passwordError, firstPassword]);

  return {
    handlePasswordSubmit,
    handleUsernameSubmit,
    handleChangeUsername,
    handleChangePassword,
    setPasswordValues,
    setpasswordError,
    username,
    passwordValues,
    usernameError,
    passwordError,
  };
};
