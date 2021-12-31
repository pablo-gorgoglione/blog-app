import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import PostService from '../services/post';
import LikeService from '../services/like';
import { StyledPost } from '../components/styles/Post.styled';
import { DateFormat } from '../utils/DateFormatting';
import { IPost, IComment } from '../interfaces/interfaces';
import { Spinner } from '../components/Spinner';
import { motion, AnimatePresence } from 'framer-motion';
import { CommentList } from '../components/Comment/CommentList';
import { FaHeart } from 'react-icons/fa';

interface PostProps {}

const postInitialValues = {
  _id: '',
  title: '',
  content: '',
  datePublished: '',
  tags: [],
  isPublished: 0,
  likeCounter: 0,
} as IPost;
const commmentsInitialValues = {} as IComment[];

export const Post: React.FC<PostProps> = () => {
  let navigate = useNavigate();
  const [post, setPost] = useState<IPost>(postInitialValues);
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<IComment[]>(commmentsInitialValues);

  const params = useParams();
  const idPost = params.idPost;
  const cookies = new Cookies();
  let userId = cookies.get('userId');
  let jwt = cookies.get('userInfo');

  useEffect(() => {
    setLoading(true);
    getPost();
  }, []);

  useEffect(() => {
    changeDateFormat();
    getAllComments();
  }, [post.content]);

  const getPost = async () => {
    const res = await PostService.getOne(idPost, jwt);
    if (res.data.Success === 1) {
      setPost(res.data.Data);
      setLoading(false);
    }
  };

  const changeDateFormat = () => {
    let date: string = DateFormat(post.datePublished);
    setPost({ ...post, datePublished: date });
  };

  const getAllComments = async () => {
    const res = await PostService.getAllComments(idPost, jwt);
    if (res) {
      setComments(res.data.Data);
    }
  };

  /* const handleLikeEvent = async () => {
    const res = await LikeService.sendLikePost(idPost, jwt);
    if (res) {
      let newlikecounter: number = res.data.Data.likeCounter;
      setPost({ ...post, likeCounter: newlikecounter });
    }
  };

  const handleDislikeEvent = async () => {
    const res = await LikeService.deleteLikePost(idPost, jwt);
    if (res) {
      let newlikecounter: number = res.data.Data.likeCounter;
      setPost({ ...post, likeCounter: newlikecounter });
    }
  }; */

  if (loading) {
    return <Spinner />;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledPost>
          <div className='postcontainer'>
            <button className='ButtonGoBack' onClick={() => navigate(`../`)}>
              back
            </button>
            <div className='Content'>
              <h1>{post.title}</h1>
              <p>{post.datePublished}</p>
              <p>{post.content}</p>
            </div>
            <div className='likecontainer'>
              <FaHeart className='likeIcon' />
              {post.likeCounter}
            </div>
          </div>
          <div className='commentcontainer'>
            <CommentList
              getAllComments={getAllComments}
              post={post}
              jwt={jwt}
              comments={comments}
              userId={userId}
            ></CommentList>
          </div>
        </StyledPost>
      </motion.div>
    </AnimatePresence>
  );
};
