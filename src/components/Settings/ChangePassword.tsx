import { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';
import { StyledChangePassword } from '../styles/ChangePasssword.styled';

interface ChangePasswordProps {}

export const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const {
    handleChangePassword,
    handlePasswordSubmit,
    setPasswordValues,
    setpasswordError,
    passwordValues,
    passwordError,
  } = useSettings();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    setPasswordValues({ password: '', passRepeat: '' });
    setpasswordError({ password: '', passRepeat: '' });
  };

  return (
    <StyledChangePassword>
      <div className='tittle'>
        <h2>Password</h2>
        <div>
          {isOpen ? (
            <button className='buttoncancel' onClick={toggleIsOpen}>
              Cancel
            </button>
          ) : (
            <button className='buttonchange' onClick={toggleIsOpen}>
              Change
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className='inputs-div'>
          <div>
            <input
              onChange={handleChangePassword}
              type='password'
              placeholder='New password'
              name='password'
              value={passwordValues.password}
            />
            <span>{passwordError.password} </span>
          </div>
          <div>
            <input
              onChange={handleChangePassword}
              type='password'
              value={passwordValues.passRepeat}
              name='passRepeat'
              placeholder='Reapeat the password'
            />
            <span>{passwordError.passRepeat}</span>
          </div>
          <div id='submitDiv'>
            <button className='buttonSubmit' onClick={handlePasswordSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </StyledChangePassword>
  );
};
