import { Link, useNavigate } from 'react-router-dom';
import { StyledNav } from './styles/Nav.styled';
import { useUser } from '../hooks/useUser';
import { UserMenu } from './UserMenu';
import { Spinner } from './Spinner';

interface HeaderProps {}
export const Navbar: React.FC<HeaderProps> = () => {
  const {
    logout,
    isLog,
    loading,
    user: { isAuthor, username },
  } = useUser();
  let navigate = useNavigate();

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
        {loading ? (
          <Spinner />
        ) : isLog ? (
          <div className='user'>
            <UserMenu username={username} isAuthor={isAuthor} logout={logout} />
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
