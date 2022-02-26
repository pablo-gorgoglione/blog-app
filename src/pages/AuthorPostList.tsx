import { useContext, useEffect, useState } from 'react';
import { PostList } from '../components/PostsList';
import { Spinner } from '../components/Spinner';
import { StyledAuthorPostList } from '../components/styles/AuthorPostList.styled';
import PostContext from '../context/post/PostContext';
import { IPost } from '../interfaces/interfaces';
import PostService from '../services/post';
import { useSnackBar } from '../hooks/useSnackBar';
import { useUser } from '../hooks/useUser';

interface Props {}

const AuthorPostList = () => {
  const { loading, posts, error, getPosts } = useContext(PostContext);
  const {
    user: { isAuthor, token },
  } = useUser();

  const [selected, setSelected] = useState<number>(1);

  const [postNotPublished, setPostNotPublished] = useState<IPost[]>([]);
  const [loadingNP, setLoadingNP] = useState<boolean>(false);

  useEffect(() => {
    const getAllNotPublishedPosts = async () => {
      setLoadingNP(true);
      try {
        const {
          data: { Data },
        } = await PostService.getAll(token, false);
        setPostNotPublished(Data);
      } catch (error) {
        console.log({ error });
      }
      setLoadingNP(false);
    };

    getPosts();
    getAllNotPublishedPosts();
  }, []);

  if (loading || loadingNP) {
    return <Spinner />;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <StyledAuthorPostList>
      <div>
        <button
          onClick={() => setSelected(1)}
          className={selected === 1 ? 'active' : ''}
        >
          Published
        </button>
        <button
          onClick={() => setSelected(2)}
          className={selected === 2 ? 'active' : ''}
        >
          Not Published
        </button>
      </div>
      {selected === 1 ? (
        <PostList posts={posts} author={isAuthor} />
      ) : (
        <PostList posts={postNotPublished} author={isAuthor} />
      )}
    </StyledAuthorPostList>
  );
};

export default AuthorPostList;
