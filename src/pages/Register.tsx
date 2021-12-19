import { StyledRegister } from '../components/styles/Register.styled';
// import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import ValidateRegister from '../utils/ValidateRegister';

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  // let navigate = useNavigate();

  //custom hooks

  const { formValues, errors, handleChange, handleSubmit } =
    useRegister(ValidateRegister);
  const { password, repeatPass, username } = formValues;

  return (
    <StyledRegister>
      <div className='container'>
        <h1>Register</h1>
        <h3>Username</h3>
        <input
          type='text'
          onChange={handleChange}
          value={username}
          name='username'
        />
        <span style={{ marginLeft: '10px', color: 'red' }}>
          {errors.username}
        </span>
        <h3>Password</h3>
        <input
          type='password'
          onChange={handleChange}
          value={password}
          name='password'
        />
        <span style={{ marginLeft: '10px', color: 'red' }}>
          {errors.password}
        </span>
        <p>Repeat the password</p>
        <input
          type='password'
          onChange={handleChange}
          value={repeatPass}
          name='repeatPass'
          // disabled={true}
        />
        <span style={{ marginLeft: '10px', color: 'red' }}>
          {errors.repeatPass}
        </span>

        <button style={{ display: 'block' }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </StyledRegister>
  );
};
