import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

interface Props {}

export const DeleteAccount: React.FC<Props> = () => {
  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { deleteAccount } = useUser();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteAccount = () => {
    let isExecuted = window.confirm('Are you sure to delete your account?');
    if (isExecuted) {
      deleteAccount();
      navigate(`../`);
    }
  };
  return (
    <div>
      <div className='tittle'>
        <h2>Delete Account</h2>
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

      {isOpen && (
        <div className='delete'>
          <p>
            This action cannot be undone.
            <p> This will permanently delete yuor account.</p>
          </p>
          <button onClick={handleDeleteAccount}>DELETE</button>
        </div>
      )}
    </div>
  );
};
