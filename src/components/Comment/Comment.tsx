import { useState } from 'react';
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

interface CommentProps {
  userId: string;
  comment: IComment;
  idPost: string | undefined;
  jwt: string;
  getAllComments: () => void;
}

export const Comment: React.FC<CommentProps> = ({
  comment,
  idPost,
  jwt,
  getAllComments,
  userId,
}) => {
  const [likeCounter, setLikeCounter] = useState<number>(comment.likeCounter);

  const { openSnackBar } = useSnackBar();

  const handleDelete = async () => {
    const res = await CommentService.deleteOne(idPost, jwt, comment._id);
    if (res.data.Success === 1) {
      getAllComments();
      openSnackBar('Comment deleted!');
    }
  };

  const handleLike = async () => {
    const data = await LikeService.sendLikeComment(comment._id, idPost, jwt);
    if (data.data.Data) {
      setLikeCounter(data.data.Data.likeCounter);
    }
  };
  const handleDislike = async () => {
    const data = await LikeService.deleteLikeComment(comment._id, idPost, jwt);
    if (data.data.Data) {
      setLikeCounter(data.data.Data.likeCounter);
    }
  };

  return (
    <StyledComment>
      <div className='container'>
        <div className='usernamediv'>
          <div className={userId === comment.user._id ? 'mediv' : ''}>
            <FaUser />
            <b>{comment.user.username}</b>
          </div>
          <span>{DateFormat(comment.date)}</span>
        </div>
        <div className='content-container'>
          <p> {comment.content}</p>
        </div>
        <div className='btns'>
          <div>
            <FaHeart />
            {likeCounter}
          </div>
          <div className='delete'>
            {userId === comment.user._id && (
              //TODO - options component menu on each comment
              <FaTrashAlt onClick={handleDelete} />
            )}
          </div>
          <div>
            this will be deleted soon...
            <button className='LikeButton' onClick={handleLike}>
              +1
            </button>
            <button className='DislikeButton' onClick={handleDislike}>
              -1
            </button>
          </div>
        </div>
      </div>
    </StyledComment>
  );
};
