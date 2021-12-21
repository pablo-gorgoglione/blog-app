export function validateUsername(username: string): string {
  let error = '';
  if (!username) {
    error = 'Username is required';
  } else if (username.length < 4) {
    error = 'Username must be at least 4 characters';
  }
  return error;
}

interface IPasswordErrors {
  password: string;
  passRepeat: string;
}

export function validatePassword(values: IPasswordErrors): IPasswordErrors {
  let passwordError: IPasswordErrors = {
    password: '',
    passRepeat: '',
  };

  if (!values.password) {
    passwordError.password = 'Password is required';
  } else if (values.password.length < 6) {
    passwordError.password = 'Password must be at least 6 characters';
  }
  if (!values.passRepeat) {
    passwordError.passRepeat = 'Password is required';
  } else if (values.passRepeat !== values.password) {
    passwordError.passRepeat = 'Passwords must match';
  }

  return passwordError;
}
