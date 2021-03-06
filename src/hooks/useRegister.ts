import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/UserContext';
import { IFormValues } from '../interfaces/interfaces';

export const useRegister = (
  ValidateRegister: (formValues: IFormValues) => IFormValues
) => {
  const { register } = useContext(UserContext);
  let navigate = useNavigate();

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
      navigate('../login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return { handleChange, handleSubmit, formValues, errors };
};
