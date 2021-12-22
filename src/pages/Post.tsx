import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import PostService from '../services/post';
import LikeService from '../services/like';
import CommentService from '../services/comment';
import { StyledPost } from '../components/styles/Post.styled';
import { DateFormat } from '../utils/DateFormatting';
import { Comment } from '../components/Comment';
import { IPost, IComment } from '../interfaces/interfaces';
import { Spinner } from '../components/Spinner';

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
  const [show, setShow] = useState<boolean>(false);
  const [addComment, setAddComment] = useState<boolean>(false);
  const [newcomment, setNewComment] = useState<string>('');
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

  useEffect(() => {
    if (!show) {
      setAddComment(false);
    }
  }, [show]);

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

  const handleShowClick = () => {
    setShow(!show);
  };

  const handleGoBack = () => {
    navigate(`../`);
  };

  const handleLikeEvent = async () => {
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
  };

  const toggleAddComment = () => {
    setAddComment(!addComment);
  };

  const handleCommChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    const res = await CommentService.createOne(post._id, jwt, newcomment);
    if (res.data.Data) {
      getAllComments();
      setNewComment('');
      setShow(true);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <StyledPost>
      <button className='ButtonGoBack' onClick={handleGoBack}>
        back
      </button>
      <div className='Content'>
        <h1>{post.title}</h1>
        <p>{post.datePublished}</p>
        <p>{post.content}</p>
      </div>
      <div className='Like'>
        <span>Likes: {post.likeCounter}</span>
        <div>
          <button className='LikeButton' onClick={handleLikeEvent}>
            +1
          </button>
          <button className='DislikeButton' onClick={handleDislikeEvent}>
            -1
          </button>
        </div>
      </div>
      {/* este div deberia ser otro componente */}
      <div className='Comment'>
        <div className='CommentButtons'>
          <span className='CommentSpan' onClick={handleShowClick}>
            Comments {comments.length}{' '}
          </span>
          <button onClick={toggleAddComment} className='ButtonAddComment'>
            Add a comment
          </button>
        </div>
        {show && (
          <div>
            {comments.length > 0 ? (
              comments.map((c) => {
                return (
                  <Comment
                    userId={userId}
                    key={c._id}
                    comment={c}
                    idPost={post._id}
                    jwt={jwt}
                    getAllComments={getAllComments}
                  />
                );
              })
            ) : (
              <p className='CommentP'>No comments</p>
            )}
          </div>
        )}
        {addComment && (
          <div className='CommentInput'>
            <input
              type='text'
              name='newcomment'
              value={newcomment}
              onChange={handleCommChange}
            />
            <button onClick={handleCommentSubmit} className='CommentButtonSend'>
              Send
            </button>
          </div>
        )}
      </div>
    </StyledPost>
  );
};
