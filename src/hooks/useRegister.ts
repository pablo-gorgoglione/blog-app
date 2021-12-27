import { useState, useEffect } from 'react';
import { IFormValues } from '../interfaces/interfaces';
import { useUser } from './useUser';

export const useRegister = (
  ValidateRegister: (formValues: IFormValues) => IFormValues
) => {
  const { register } = useUser();
  //Errors messages state
  const [errors, setErrors] = useState<IFormValues>({
    username: '',
    password: '',
    repeatPass: '',
  });

  //Form values state
  const [formValues, setFormValues] = useState<IFormValues>({
    username: '',
    password: '',
    repeatPass: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(ValidateRegister(formValues));
  };

  useEffect(() => {
    if (
      !errors.username &&
      !errors.password &&
      !errors.repeatPass &&
      formValues.username
    ) {
      register({
        username: formValues.username,
        password: formValues.password,
      });
      setFormValues({ username: '', password: '', repeatPass: '' });
    }
  }, [errors]);

  return { handleChange, handleSubmit, formValues, errors };
};
