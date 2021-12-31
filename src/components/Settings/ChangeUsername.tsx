import { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';
import { StyledChangeUsername } from '../styles/ChangeUsername.styled';

interface ChangeUsernameProps {}

export const ChangeUsername: React.FC<ChangeUsernameProps> = () => {
  const {
    handleChangeUsername,
    handleUsernameSubmit,
    setUsername,
    setUsernameError,
    username,
    usernameError,
  } = useSettings();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    setUsername('');
    setUsernameError('');
  };

  return (
    <StyledChangeUsername>
      <div className='tittle'>
        <h2>Username</h2>
        <div>
          {isOpen ? (
            <button className='btnCancel' onClick={toggleIsOpen}>
              Cancel
            </button>
          ) : (
            <button className='btnChange' onClick={toggleIsOpen}>
              Change
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className='container'>
          <form
            onSubmit={(e) => {
              handleUsernameSubmit(e);
            }}
          >
            <div>
              <input
                onChange={handleChangeUsername}
                type='text'
                placeholder='New username'
                name='username'
                value={username}
              />
              <span>{usernameError}</span>
            </div>
            <div className='btnSubmit'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      )}
    </StyledChangeUsername>
  );
};
