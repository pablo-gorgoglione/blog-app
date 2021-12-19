import { IFormValues } from '../interfaces/interfaces';

export default function ValidateRegister(formValues: IFormValues): IFormValues {
  let errors: IFormValues = {
    username: '',
    password: '',
    repeatPass: '',
  };

  //set error message
  if (!formValues.username) {
    errors.username = 'Username is required';
  } else if (formValues.username.length < 4) {
    errors.username = 'Username must be at least 4 characters';
  }

  if (!formValues.password) {
    errors.password = 'Password is required';
  } else if (formValues.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!formValues.repeatPass) {
    errors.repeatPass = 'Password is required';
  } else if (formValues.repeatPass !== formValues.password) {
    errors.repeatPass = 'Passwords must match';
  }

  return errors;
}
