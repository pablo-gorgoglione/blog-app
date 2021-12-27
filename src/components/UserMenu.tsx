import { Navigate, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { StyledUserMenu } from './styles/UserMenu.styled';
import { motion, AnimatePresence } from 'framer-motion';

interface props {
  username: string;
  logout: () => void;
}

export const UserMenu: React.FC<props> = ({ username, logout }) => {
  let navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [buttonWidth, setButtonWidth] = useState<number>(0);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const goSettings = () => {
    navigate(`./settings`);
    setShowMenu(false);
  };

  const toggleShow = () => {
    setShowMenu(!showMenu);
  };
  const handleLogOut = () => {
    logout();
    setShowMenu(false);
    return <Navigate to='../' />;
  };

  useEffect(() => {}, [showMenu]);

  useEffect(() => {
    //Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    //Close menu if clicked outside
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef && !dropdownRef.current?.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    //Update button width.
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }

    //unbind the event listener
    return () => {
      //clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [buttonRef.current, dropdownRef]);

  return (
    <StyledUserMenu buttonWidth={buttonWidth}>
      <div className='dropdown'>
        <button ref={buttonRef} onClick={toggleShow}>
          {username}
        </button>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={dropdownRef}
              className='dropdown-menu'
            >
              <ul className='user-options'>
                <li>
                  <div>Saved</div>
                </li>
                <li>
                  <div onClick={goSettings}>Settings</div>
                </li>
                <li>
                  <div className='logout' onClick={handleLogOut}>
                    Logout
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StyledUserMenu>
  );
};
