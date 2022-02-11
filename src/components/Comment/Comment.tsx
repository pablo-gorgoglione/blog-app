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
  const { likedComments, isLoading_User, setLikedComments, isLog } = useUser();

  const { openSnackBar } = useSnackBar();

  useEffect(() => {
    if (comment._id && !isLoading_User && likedComments) {
      setIsLiked(likedComments.includes(comment._id));
    }
  }, [comment._id]);

  const handleDelete = () => {
    CommentService.deleteOne(idPost, jwt, comment._id)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          getAllComments();
          openSnackBar('Comment deleted!', false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleLike = () => {
    if (!isLog) {
      openSnackBar('You must be logged in to like a comment', true);
      return;
    }
    const tempLikeCounter = likeCounter;
    setIsLiked(true);
    setLikeCounter((prevState) => prevState + 1);
    LikeService.sendLikeComment(comment._id, idPost, jwt)
      .then((res) => {
        const {
          status,
          data: {
            Data: { likeCounter, likedComments },
          },
        } = res;
        if (status === 200) {
          setLikeCounter(likeCounter);
          setLikedComments(likedComments);
        }
      })
      .catch((e) => {
        console.log(e);
        setIsLiked(false);
        setLikeCounter(tempLikeCounter);
      });
  };

  const handleDislike = () => {
    if (!isLog) {
      openSnackBar('You must be logged in to like a comment', true);
      return;
    }
    const tempLikeCounter = likeCounter;
    setLikeCounter((prevState) => prevState - 1);
    setIsLiked(false);

    LikeService.deleteLikeComment(comment._id, idPost, jwt)
      .then((res) => {
        const {
          status,
          data: {
            Data: { likeCounter, likedComments },
          },
        } = res;
        if (status === 200) {
          setLikeCounter(likeCounter);
          setLikedComments(likedComments);
        }
      })
      .catch((e) => {
        console.log(e.response.data.Message);
        setLikeCounter(tempLikeCounter);
        setIsLiked(true);
      });
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
