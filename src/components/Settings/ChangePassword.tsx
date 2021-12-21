import { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';
import { StyledChangePassword } from '../styles/ChangePasssword.styled';

interface ChangePasswordProps {}

export const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const {
    handleChangePassword,
    handlePasswordSubmit,
    passwordValues,
    passwordError,
  } = useSettings();
  const [showForm, setShowForm] = useState<boolean>(false);
  const toggleView = () => {
    setShowForm(!showForm);
  };

  return (
    <StyledChangePassword>
      <div className='tittleAndButton'>
        <h2>Password</h2>
        <button className='changebtn' onClick={toggleView}>
          Change
        </button>
      </div>

      {showForm && (
        <>
          <input
            onChange={handleChangePassword}
            type='password'
            placeholder='New password'
            name='password'
            value={passwordValues.password}
          />
          <button className='submitbtn' onClick={handlePasswordSubmit}>
            Submit
          </button>
          <br />
          <p className='inputpassrepeat'>{passwordError.password}</p>
          <br />
          <input
            onChange={handleChangePassword}
            type='password'
            value={passwordValues.passRepeat}
            name='passRepeat'
            placeholder='Reapeat the password'
          />
          <br />
          <p>{passwordError.passRepeat}</p>
          <br />
        </>
      )}
    </StyledChangePassword>
  );
};
