import { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';
import { StyledChangeUsername } from '../styles/ChangeUsername.styled';

interface ChangeUsernameProps {}

export const ChangeUsername: React.FC<ChangeUsernameProps> = () => {
  const {
    handleChangeUsername,
    handleUsernameSubmit,
    username,
    usernameError,
  } = useSettings();

  const [showForm, setShowForm] = useState<boolean>(false);

  const toggleView = () => {
    setShowForm(!showForm);
  };

  return (
    <StyledChangeUsername>
      <div className='tittleAndButton'>
        <h2>Username</h2>
        <button className='changebtn' onClick={toggleView}>
          Change
        </button>
      </div>
      {showForm && (
        <form
          onSubmit={(e) => {
            handleUsernameSubmit(e);
          }}
          className='inputdiv'
        >
          <input
            onChange={handleChangeUsername}
            type='text'
            placeholder='New username'
            name='username'
            value={username}
          />
          <button className='submitbtn' type='submit'>
            Submit
          </button>
          <br />
          <span>{usernameError}</span>
        </form>
      )}
    </StyledChangeUsername>
  );
};
