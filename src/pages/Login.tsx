import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IUser } from '../interfaces/interfaces';
import { StyledLogin } from '../components/styles/Login.styled';
import { useUser } from '../hooks/useUser';
import { motion, AnimatePresence } from 'framer-motion';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user);
  };

  if (isLog) {
    return <Navigate to='../' />;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledLogin>
          <form onSubmit={(e) => handleSubmit(e)} className='container'>
            <div className='username-div'>
              <label> Username </label>
              <input
                type='text'
                name='username'
                value={username}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className='password-div'>
              <label> Password </label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <button type='submit'>Login</button>
            <p>Don't have an account?</p>
            <Link to='../register'>Create one</Link>
          </form>
        </StyledLogin>
      </motion.div>
    </AnimatePresence>
  );
};
