import { useState } from 'react';
import { StyledDeleteAccount } from '../styles/DeleteAccount.styled';

interface Props {}

export const DeleteAccount: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledDeleteAccount>
      <div className='tittle'>
        <h2>Delete Account</h2>
        <div>
          {isOpen ? (
            <button className='buttoncancel' onClick={toggleIsOpen}>
              go back
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
          <button>DELETE</button>
        </div>
      )}
    </StyledDeleteAccount>
  );
};
