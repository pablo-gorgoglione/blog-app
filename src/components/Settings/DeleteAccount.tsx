import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { StyledDeleteAccount } from '../styles/DeleteAccount.styled';

interface Props {}

export const DeleteAccount: React.FC<Props> = () => {
  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { deleteAccount } = useUser();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteAccount = () => {
    deleteAccount();
    navigate(`../`);
  };
  return (
    <StyledDeleteAccount>
      <div className='tittle'>
        <h2>Delete Account</h2>
        <div>
          {isOpen ? (
            <button className='buttoncancel' onClick={toggleIsOpen}>
              CANCEL
            </button>
          ) : (
            <button className='buttonchange' onClick={toggleIsOpen}>
              Open
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className='delete'>
          <p>
            This action cannot be undone. This will permanently delete yuor
            account.
          </p>
          <button onClick={handleDeleteAccount}>DELETE</button>
        </div>
      )}
    </StyledDeleteAccount>
  );
};
