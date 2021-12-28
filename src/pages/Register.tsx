import { StyledRegister } from '../components/styles/Register.styled';
// import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import ValidateRegister from '../utils/ValidateRegister';
import { motion, AnimatePresence } from 'framer-motion';

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  // let navigate = useNavigate();

  //custom hooks

  //RegisterHook
  const { formValues, errors, handleChange, handleSubmit } =
    useRegister(ValidateRegister);
  const { password, repeatPass, username } = formValues;

  //SnackBarHook

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledRegister>
          <form onSubmit={(e) => handleSubmit(e)} className='container'>
            <h1>Register</h1>
            <div className='username-div'>
              <h3>Username</h3>
              <input
                type='text'
                onChange={handleChange}
                value={username}
                name='username'
              />
              <span>{errors.username}</span>
            </div>
            <div className='password-div'>
              <h3>Password</h3>
              <input
                type='password'
                onChange={handleChange}
                value={password}
                name='password'
              />
              <span>{errors.password}</span>
              <div className='repeatpass'>
                <p>Repeat the password</p>
                <input
                  type='password'
                  onChange={handleChange}
                  value={repeatPass}
                  name='repeatPass'
                  // disabled={true}
                />
                <span>{errors.repeatPass}</span>
              </div>
            </div>

            <button type='submit'>Submit</button>
          </form>
        </StyledRegister>
      </motion.div>
    </AnimatePresence>
  );
};
