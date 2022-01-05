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
import { useUser } from '../hooks/useUser';
import { useSnackBar } from '../hooks/useSnackBar';

interface PostProps {}

const postInitialValues = {
  _id: '',
  title: '',
  content: '',
  datePublished: '',
  tags: [],
  isPublished: 0,
  likeCounter: 0,
  commentCounter: 0,
} as IPost;
const commmentsInitialValues = {} as IComment[];

export const Post: React.FC<PostProps> = () => {
  let navigate = useNavigate();
  const [post, setPost] = useState<IPost>(postInitialValues);
  const [loading, setLoading] = useState<boolean>(true);
  const [comments, setComments] = useState<IComment[]>(commmentsInitialValues);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { likedPosts, isLoading, setLikedPost } = useUser();

  const params = useParams();
  const idPost = params.idPost;
  const cookies = new Cookies();
  let userId = cookies.get('userId');
  let jwt = cookies.get('userInfo');

  const { openSnackBar } = useSnackBar();

  useEffect(() => {
    getPost();
    getAllComments();
  }, []);

  useEffect(() => {
    if (!isLoading && !loading) {
      setIsLiked(likedPosts.includes(post._id));
    }
  }, [isLoading, loading]);

  /* change the Date format when the post is loaded */
  useEffect(() => {
    changeDateFormat();
    if (post._id) {
      setLoading(false);
    }
  }, [post.content]);

  const getPost = async () => {
    const res = await PostService.getOne(idPost, jwt);
    if (res.data.Success === 1) {
      setPost(res.data.Data);
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

  const handleLikeEvent = async () => {
    setIsLiked(true);
    setPost({ ...post, likeCounter: post.likeCounter + 1 });
    const res = await LikeService.sendLikePost(idPost, jwt).catch((err) => {
      setIsLiked(false);
      console.log(err.response.data.Message);
      if (err.response.status === 401) {
        openSnackBar('You must be logged in to like a post', true);
      }
    });

    if (res) {
      if (res.status === 200) {
        let newlikecounter: number = res.data.Data.likeCounter;
        let likedPosts: string[] = res.data.Data.likedPosts;
        setPost({ ...post, likeCounter: newlikecounter });
        setLikedPost(likedPosts);
      }
    }
  };

  const handleDislikeEvent = async () => {
    setIsLiked(false);
    setPost({ ...post, likeCounter: post.likeCounter - 1 });

    const res = await LikeService.deleteLikePost(idPost, jwt).catch((err) => {
      setIsLiked(true);
      console.log(err.response.data.Message);
    });

    if (res) {
      if (res.status === 200) {
        let newlikecounter: number = res.data.Data.likeCounter;
        let likedPosts: string[] = res.data.Data.likedPosts;
        setPost({ ...post, likeCounter: newlikecounter });
        setLikedPost(likedPosts);
      }
    }
  };

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
              {isLiked ? (
                <FaHeart className='likeIcon' onClick={handleDislikeEvent} />
              ) : (
                <FaHeart className='dislikeIcon' onClick={handleLikeEvent} />
              )}
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
