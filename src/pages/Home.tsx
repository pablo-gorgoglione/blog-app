import React, { useEffect } from 'react';
import { PostList } from '../components/PostsList';
import { Spinner } from '../components/Spinner';
import { usePosts } from '../hooks/usePosts';
import { motion, AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PostList posts={posts} />
        <PostList posts={posts} />
        <PostList posts={posts} />
        <PostList posts={posts} />
        <PostList posts={posts} />
      </motion.div>
    </AnimatePresence>
  );
};
