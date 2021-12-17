import { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { StyledNav } from './styles/Nav.styled';
import { useUser } from '../hooks/userUser';

interface HeaderProps {}
export const Navbar: React.FC<HeaderProps> = () => {
  const [sure, setSure] = useState<boolean>(false);
  const { checkIsLog, logout, isLog, username } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    checkIsLog();
  }, []);

  const handleLogOut = () => {
    logout();
    setSure(false);
    return <Navigate to='../' />;
  };
  const goSettings = () => {
    navigate(`./settings`);
  };
  const logIn = () => {
    navigate(`./login`);
  };
  const handleSure = () => {
    setSure(!sure);
  };

  return (
    <StyledNav>
      <div>
        <h1 className='blogApph1'>
          <Link className='BlogAppLink' to=''>
            Blog-App
          </Link>
        </h1>
        <div>
          <Link to='about'>About</Link>

          {isLog ? (
            sure ? (
              <div className='spanInDiv'>
                <span style={{ marginRight: '11px' }} onClick={handleSure}>
                  back
                </span>
                <span onClick={handleLogOut}>Logout</span>
                <span className='spanOptions' onClick={goSettings}>
                  Settings
                </span>
              </div>
            ) : (
              <button className='ButtonUsername' onClick={handleSure}>
                {username}
              </button>
            )
          ) : (
            <span className='loginSpan' onClick={logIn}>
              Login
            </span>
          )}
        </div>
      </div>
    </StyledNav>
  );
};
