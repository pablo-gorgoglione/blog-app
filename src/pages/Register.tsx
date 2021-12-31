import { StyledRegister } from '../components/styles/Register.styled';
// import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import ValidateRegister from '../utils/ValidateRegister';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
          <h1>Register</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <section>
              <div>
                <label>Username</label>
                <input
                  type='text'
                  onChange={handleChange}
                  value={username}
                  name='username'
                />
                <span>{errors.username}</span>
              </div>
              <div>
                <label>Password</label>
                <input
                  type='password'
                  onChange={handleChange}
                  value={password}
                  name='password'
                />
                <span>{errors.password}</span>
              </div>
              <div>
                <p>Repeat the password</p>
                <input
                  type='password'
                  onChange={handleChange}
                  value={repeatPass}
                  name='repeatPass'
                />
                <span>{errors.repeatPass}</span>
              </div>
            </section>
            <button type='submit'>Submit</button>
          </form>
          <div className='text'>
            <p>
              Already have an account?{' '}
              <span>
                {' '}
                <Link to='../login'>Login</Link>
              </span>
            </p>
          </div>
        </StyledRegister>
      </motion.div>
    </AnimatePresence>
  );
};
