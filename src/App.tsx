import { ThemeProvider } from 'styled-components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Post } from './pages/Post';
import { StyledBody } from './components/styles/Body.styled';
import GlobalStyles from './components/styles/Global';
import { NotFound } from './pages/NotFound';
import { Settings } from './pages/Settings';
import { PostProvider } from './context/post/PostContext';
import { UserProvider } from './context/user/UserContext';

// color viejo "rgb(37, 37, 37)",
const theme = {
  colors: {
    header: 'rgb(12, 12, 32)',
    body: 'rgb(12, 12, 32)',
    footer: 'rgb(12, 12, 32)',
  },
};
const App: React.FC = () => {
  return (
    //Providers
    <PostProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <StyledBody>
              {/* ese div seria el styledContentbody? */}
              <Navbar />
              <main className='psudoBody'>
                <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/' element={<Home />} />
                  <Route path='/settings' element={<Settings />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/post/:idPost' element={<Post />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </main>
            </StyledBody>
          </BrowserRouter>
        </ThemeProvider>
      </UserProvider>
    </PostProvider>
  );
};

export default App;
