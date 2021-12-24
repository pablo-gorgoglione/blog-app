import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledNav } from './styles/Nav.styled';
import { useUser } from '../hooks/useUser';
import { UserMenu } from './UserMenu';

interface HeaderProps {}
export const Navbar: React.FC<HeaderProps> = () => {
  const { checkIsLog, logout, isLog, username } = useUser();
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

        {isLog ? (
          <UserMenu username={username} logout={logout} />
        ) : (
          <span className='loginSpan' onClick={logIn}>
            Login
          </span>
        )}
      </div>
    </StyledNav>
  );
};
