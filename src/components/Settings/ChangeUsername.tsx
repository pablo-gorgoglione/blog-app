import { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';

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
    <div>
      <div className='tittle'>
        <h2>Username</h2>

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
        <form
          className='container-changeUsername'
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
          <button className='buttonSubmit' type='submit'>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};
