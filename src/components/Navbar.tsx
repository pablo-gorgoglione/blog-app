import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledNav } from './styles/Nav.styled';
import { useUser } from '../hooks/useUser';
import { UserMenu } from './UserMenu';
import { Spinner } from './Spinner';

interface HeaderProps {}
export const Navbar: React.FC<HeaderProps> = () => {
  const { checkIsLog, logout, isLog, username, isLoading_User } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    checkIsLog();
  }, []);

  const logIn = () => {
    navigate(`./login`);
  };

  return (
    <StyledNav>
      <h1>
        <Link className='BlogAppLink' to=''>
          Blog-App
        </Link>
      </h1>

      <div className='links-container'>
        <Link to='about'>About</Link>
        {isLoading_User ? (
          <Spinner />
        ) : isLog ? (
          <div className='user'>
            <UserMenu username={username} logout={logout} />
          </div>
        ) : (
          <span className='loginSpan' onClick={logIn}>
            Login
          </span>
        )}
      </div>
    </StyledNav>
  );
};
