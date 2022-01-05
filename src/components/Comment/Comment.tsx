import { useEffect, useState } from 'react';
import { IComment } from '../../interfaces/interfaces';
import { StyledComment } from '../styles/Comment.styled';
import CommentService from '../../services/comment';
import { DateFormat } from '../../utils/DateFormatting';
import LikeService from '../../services/like';
import { useSnackBar } from '../../hooks/useSnackBar';
import { FaHeart } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
// import { FaUserCircle } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useUser } from '../../hooks/useUser';

interface CommentProps {
  getAllComments: () => void;
  userId: string;
  comment: IComment;
  idPost: string | undefined;
  jwt: string;
}

export const Comment: React.FC<CommentProps> = ({
  comment,
  idPost,
  jwt,
  getAllComments,
  userId,
}) => {
  const [likeCounter, setLikeCounter] = useState<number>(comment.likeCounter);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { likedComments, isLoading, setLikedComments } = useUser();

  const { openSnackBar } = useSnackBar();

  useEffect(() => {
    if (comment._id && !isLoading) {
      setIsLiked(likedComments.includes(comment._id));
    }
  }, [comment._id]);

  const handleDelete = async () => {
    const res = await CommentService.deleteOne(idPost, jwt, comment._id);
    if (res.data.Success === 1) {
      getAllComments();
      openSnackBar('Comment deleted!', false);
    }
  };

  const handleLike = async () => {
    setIsLiked(true);
    setLikeCounter((prevState) => prevState + 1);
    const data = await LikeService.sendLikeComment(
      comment._id,
      idPost,
      jwt
    ).catch((err) => {
      setIsLiked(false);
      console.log(err.response.data.Message);
      if (err.response.status === 401) {
        openSnackBar('You must be logged in to like a comment', true);
      }
    });
    if (data) {
      if (data.data.Data) {
        setLikeCounter(data.data.Data.likeCounter);
        setLikedComments(data.data.Data.likedComments);
      }
    }
  };

  const handleDislike = async () => {
    setLikeCounter((prevState) => prevState - 1);
    setIsLiked(false);
    const data = await LikeService.deleteLikeComment(
      comment._id,
      idPost,
      jwt
    ).catch((err) => {
      setIsLiked(true);
      console.log(err.response.data.Message);
    });

    if (data) {
      if (data.data.Data) {
        setLikeCounter(data.data.Data.likeCounter);
        setLikedComments(data.data.Data.likedComments);
      }
    }
  };

  return (
    <StyledComment>
      <div className='container'>
        <div className='usernamediv'>
          {comment.user === null ? (
            <div>
              <FaUser /> <b>deleted</b>{' '}
            </div>
          ) : (
            <div className={userId === comment.user._id ? 'mediv' : ''}>
              <FaUser />
              <b>{comment.user.username}</b>
            </div>
          )}
          <span>{DateFormat(comment.date)}</span>
        </div>
        <div className='content-container'>
          <p> {comment.content}</p>
        </div>
        <div className='btns'>
          <div className='delete'>
            {comment.user !== null && userId === comment.user._id && (
              //TODO - options component menu on each comment
              <FaTrashAlt onClick={handleDelete} />
            )}
          </div>
          <div className='likecontainer'>
            {isLiked ? (
              <FaHeart className='likeIcon' onClick={handleDislike} />
            ) : (
              <FaHeart className='dislikeIcon' onClick={handleLike} />
            )}
            {likeCounter}
          </div>
        </div>
      </div>
    </StyledComment>
  );
};
