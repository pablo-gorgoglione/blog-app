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
  const { likedPosts, isLoading_User, setLikedPost, isLog, id } = useUser();

  const params = useParams();
  const idPost = params.idPost;
  const cookies = new Cookies();
  let jwt = cookies.get('JWT');

  const { openSnackBar } = useSnackBar();

  useEffect(() => {
    const getPost = () => {
      PostService.getOne(idPost, jwt)
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            const { Data: Post } = data;
            setPost(Post);
          }
        })
        .catch((e) => {
          openSnackBar('Error getting the post', true);
        });
    };

    getPost();
    getAllComments();
  }, []);

  useEffect(() => {
    if (!isLoading_User && !loading) {
      setIsLiked(likedPosts.includes(post._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading_User, loading, isLog]);

  useEffect(() => {
    /* change the Date format when the post is loaded */
    let date: string = DateFormat(post.datePublished);
    setPost({ ...post, datePublished: date });

    if (post._id) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.content]);

  const getAllComments = () => {
    PostService.getAllComments(idPost, jwt)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const { Data: Comments } = data;
          setComments(Comments);
        }
      })
      .catch((e) => {
        openSnackBar('Error getting comments', true);
      });
  };

  const handleLikeEvent = () => {
    if (!isLog) {
      openSnackBar('Login to like a post', true);
      return;
    }
    setIsLiked(true);
    setPost({ ...post, likeCounter: post.likeCounter + 1 });
    LikeService.sendLikePost(idPost, jwt)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const {
            Data: { likeCounter: newLikeCounter, likedPosts },
          } = data;
          setPost({ ...post, likeCounter: newLikeCounter });
          setLikedPost(likedPosts);
        }
      })
      .catch((e) => {
        setIsLiked(false);
        setPost({ ...post, likeCounter: post.likeCounter - 1 });
        console.log(e);
      });
  };

  const handleDislikeEvent = () => {
    if (!isLog) {
      openSnackBar('Login to like a post', true);
      return;
    }

    setIsLiked(false);
    setPost({ ...post, likeCounter: post.likeCounter - 1 });

    LikeService.deleteLikePost(idPost, jwt)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const {
            Data: { likeCounter: newLikeCounter, likedPosts },
          } = data;
          setPost({ ...post, likeCounter: newLikeCounter });
          setLikedPost(likedPosts);
        }
      })
      .catch((e) => {
        setIsLiked(true);
        setPost({ ...post, likeCounter: post.likeCounter + 1 });
        console.log(e);
      });
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
              userId={id}
            ></CommentList>
          </div>
        </StyledPost>
      </motion.div>
    </AnimatePresence>
  );
};
