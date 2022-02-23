import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { StyledUserMenu } from './styles/UserMenu.styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';

interface props {
  username: string;
  isAuthor: boolean;
  logout: () => void;
}

export const UserMenu: React.FC<props> = ({ username, isAuthor, logout }) => {
  let navigate = useNavigate();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    //Close menu if clicked outside
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef && !dropdownRef.current?.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    //unbind the event listener
    return () => {
      //clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const goSettings = () => {
    navigate(`./settings`);
    setShowMenu(false);
  };

  const toggleShow = () => {
    setShowMenu(!showMenu);
  };

  const createPost = () => {
    setShowMenu(false);
    navigate(`/author/post/create`);
  };
  const postList = () => {
    setShowMenu(false);
    navigate(`/author/post/`);
  };

  const handleLogOut = () => {
    logout();
    setShowMenu(false);
    navigate(`../`);
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
                  <div onClick={goSettings}>Settings</div>
                </li>
                <li className='logout'>
                  <div onClick={handleLogOut}>Logout</div>
                </li>
              </ul>
              {isAuthor && (
                <div className='dropdown-author'>
                  <div className='divider'></div>
                  <div>
                    <p>Author menu</p>
                  </div>
                  <ul>
                    <li>
                      <div onClick={createPost}>Create a post</div>
                    </li>
                    <li>
                      <div onClick={postList}>Posts List</div>
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StyledUserMenu>
  );
};
