import React, { useEffect } from 'react';
import { PostList } from '../components/PostsList';
import { Spinner } from '../components/Spinner';
import { usePosts } from '../hooks/usePosts';

interface Props {}
//wtf
export const Home: React.FC<Props> = () => {
  const { posts, getAllPost } = usePosts();

  useEffect(() => {
    getAllPost();
  }, []);

  if (!posts || posts.length === 0) {
    return <Spinner />;
  }

  return (
    <div>
      <PostList posts={posts} />
      <PostList posts={posts} />
      <PostList posts={posts} />
      <PostList posts={posts} />
      <PostList posts={posts} />
    </div>
  );
};
