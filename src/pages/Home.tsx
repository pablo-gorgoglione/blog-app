import React, { useContext, useEffect, useState } from 'react';
import { PostList } from '../components/PostsList';
import { Spinner } from '../components/Spinner';
import { motion, AnimatePresence } from 'framer-motion';
import { IPost } from '../interfaces/interfaces';
import Pagination from '../components/Pagination';
import PostContext from '../context/post/PostContext';

interface Props {}
//wtf
export const Home: React.FC<Props> = () => {
  const { loading, posts, error, getPosts } = useContext(PostContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [tempPosts, setTempPosts] = useState<IPost[]>(posts);
  const [postPerPAge] = useState(5);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (posts && !loading) {
      setTempPosts(posts);
    }
  }, [loading, posts]);

  //Get current posts
  var currentPosts: IPost[] = [];
  const indexOfLastPost = currentPage * postPerPAge;
  const indexOfFirstPost = indexOfLastPost - postPerPAge;
  currentPosts = tempPosts.slice(indexOfFirstPost, indexOfLastPost);
  //Change page
  const paginate = (number: number) => {
    setCurrentPage(number);
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <>
        <h2>{error}</h2>
      </>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ width: '100%' }}
      >
        <PostList posts={currentPosts} />
        <Pagination
          postsPerPage={postPerPAge}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </motion.div>
    </AnimatePresence>
  );
};
