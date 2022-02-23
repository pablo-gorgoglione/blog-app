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
import { SnackBar } from './components/SnackBar';
import { SnackBarProvider } from './context/snackBar/SnackBarContext';
import CreatePost from './pages/CreatePost';
import AuthorPostList from './pages/AuthorPostList';
import EditPost from './pages/EditPost';

const theme = {
  colors: {
    header: 'black',
    body: 'black',
    footer: 'black',
  },
};
const App: React.FC = () => {
  return (
    //Providers
    <SnackBarProvider>
      <PostProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
              <StyledBody>
                <Navbar />
                <main>
                  <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/post/:idPost' element={<Post />} />
                    <Route
                      path='/author/post/create'
                      element={<CreatePost />}
                    />
                    <Route path='/author/post/' element={<AuthorPostList />} />
                    <Route
                      path='/author/post/edit/:id'
                      element={<EditPost />}
                    />
                    <Route path='*' element={<NotFound />} />
                  </Routes>

                  <SnackBar></SnackBar>
                </main>
              </StyledBody>
            </BrowserRouter>
          </ThemeProvider>
        </UserProvider>
      </PostProvider>
    </SnackBarProvider>
  );
};

export default App;
