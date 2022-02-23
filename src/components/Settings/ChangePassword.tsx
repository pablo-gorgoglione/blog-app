import { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';

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
    <div>
      <div className='tittle'>
        <h2>Password</h2>
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
    </div>
  );
};
