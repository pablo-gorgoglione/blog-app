import { useContext } from 'react';
import PostContext from '../context/post/PostContext';

export const usePosts = () => {
  const { getAllPost, postsState } = useContext(PostContext);
  const { posts } = postsState;
  return {
    posts: posts,
    getAllPost,
  };
};
