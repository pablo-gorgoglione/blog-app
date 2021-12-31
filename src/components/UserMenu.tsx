import { Navigate, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { StyledUserMenu } from './styles/UserMenu.styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';

interface props {
  username: string;
  logout: () => void;
}

export const UserMenu: React.FC<props> = ({ username, logout }) => {
  let navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);

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

  return (
    <StyledUserMenu>
      <div className='dropdown'>
        <div onClick={toggleShow}>
          <FaUserCircle />
          <FaCaretDown />
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={dropdownRef}
              className='dropdown-menu'
            >
              <div>
                <p>Singed in as</p>
                <p>{username}</p>
              </div>
              <div className='divider'></div>
              <ul>
                <li>
                  <div>Saved</div>
                </li>
                <li>
                  <div onClick={goSettings}>Settings</div>
                </li>
                <li className='logout'>
                  <div onClick={handleLogOut}>Logout</div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StyledUserMenu>
  );
};
