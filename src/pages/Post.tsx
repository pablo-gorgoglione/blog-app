import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import PostService from '../services/post';
import LikeService from '../services/like';
import { StyledPost } from '../components/styles/Post.styled';
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
  const [comments, setComments] = useState<IComment[]>(commmentsInitialValues);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [loadingPost, setLoadingPost] = useState<boolean>(true);
  const {
    user: { likedPosts, id, token },
    loading: loadingUser,
    setLikedPost,
    isLog,
  } = useUser();

  const params = useParams();
  const idPost = params.idPost;

  const { openSnackBar } = useSnackBar();

  useEffect(() => {
    const getPost = () => {
      PostService.getOne(idPost, token)
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            const { Data: Post } = data;
            setPost(Post);
          }
          setLoadingPost(false);
        })
        .catch((e) => {
          setLoadingPost(false);
          openSnackBar('Error getting the post', true);
        });
    };
    setLoadingPost(true);
    getPost();
    getAllComments();
  }, []);

  useEffect(() => {
    if (!loadingUser && !loadingPost && likedPosts) {
      setIsLiked(likedPosts.includes(post._id));
    }
  }, [loadingUser, loadingPost, likedPosts]);

  const getAllComments = () => {
    PostService.getAllComments(idPost, token)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const { Data: Comments } = data;
          setComments(Comments);
        }
      })
      .catch(() => {
        openSnackBar('Error getting comments', true);
      });
  };

  const handleLikeEvent = async () => {
    if (!isLog) {
      openSnackBar('Login to like a post', true);
      return;
    }
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);

    const tempLikeCounter = post.likeCounter;
    setIsLiked(true);
    setPost({ ...post, likeCounter: post.likeCounter + 1 });
    console.log('token: ', token);
    try {
      const {
        data: { Data },
      } = await LikeService.sendLikePost(idPost, token);
      const { likedPosts } = Data;
      setLikedPost(likedPosts);
    } catch (error) {
      setIsLiked(false);
      setPost({ ...post, likeCounter: tempLikeCounter });
      console.log('Failed: ', error);
    }
  };

  const handleDislikeEvent = () => {
    if (!isLog) {
      openSnackBar('Login to like a post', true);
      return;
    }
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);

    const tempLikeCounter = post.likeCounter;

    setIsLiked(false);
    setPost({ ...post, likeCounter: post.likeCounter - 1 });

    LikeService.deleteLikePost(idPost, token)
      .then((res) => {
        const { data: Data } = res;
        const { likedPosts } = Data;
        setLikedPost(likedPosts);
      })
      .catch((e) => {
        setIsLiked(true);
        setPost({ ...post, likeCounter: tempLikeCounter });
        console.log(e);
      });
  };

  if (loadingUser) {
    return <Spinner />;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ width: '100%' }}
      >
        <StyledPost>
          <div className='postcontainer'>
            <button className='ButtonGoBack' onClick={() => navigate(`../`)}>
              back
            </button>
            <div className='Content'>
              <h1>{post.title}</h1>
              <p>{post.datePublished.substring(0, 10)}</p>
              <p>{post.content}</p>
            </div>
            <div className='likecontainer'>
              {isLiked ? (
                <FaHeart
                  style={clicked ? { pointerEvents: 'none' } : {}}
                  className='likeIcon'
                  onClick={handleDislikeEvent}
                />
              ) : (
                <FaHeart
                  style={clicked ? { pointerEvents: 'none' } : {}}
                  className='dislikeIcon'
                  onClick={handleLikeEvent}
                />
              )}
              {post.likeCounter}
            </div>
          </div>
          <div className='commentcontainer'>
            <CommentList
              getAllComments={getAllComments}
              post={post}
              jwt={token}
              comments={comments}
              userId={id}
            ></CommentList>
          </div>
        </StyledPost>
      </motion.div>
    </AnimatePresence>
  );
};
