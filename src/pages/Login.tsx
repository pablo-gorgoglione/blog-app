import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IUser } from '../interfaces/interfaces';
import { StyledLogin } from '../components/styles/Login.styled';
import { useUser } from '../hooks/useUser';

interface LoginProps {}

const userInitialValues = {
  username: '',
  password: '',
};

export const Login: React.FC<LoginProps> = () => {
  const [user, setUser] = useState<IUser>(userInitialValues);
  const { username, password } = user;
  const { login, isLog } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    login(user);
  };

  if (isLog) {
    return <Navigate to='../' />;
  }

  return (
    <StyledLogin>
      <div className='container'>
        <p> Username: </p>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <p> Password: </p>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button onClick={handleLogin}>login</button>
        <p>Don't have an account?</p>
        <Link to='../register'>Create one</Link>
      </div>
    </StyledLogin>
  );
};
