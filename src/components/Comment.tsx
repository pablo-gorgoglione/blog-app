import { IComment } from '../interfaces/interfaces';
import { StyledComment } from './styles/Comment.styled';
import CommentService from '../services/comment';
import { DateFormat } from '../utils/DateFormatting';
import { useState } from 'react';
import LikeService from '../services/like';

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

  const handleDelete = async () => {
    const res = await CommentService.deleteOne(idPost, jwt, comment._id);
    if (res.data.Success === 1) {
      getAllComments();
    }
  };

  const handleLike = async () => {
    const data = await LikeService.sendLikeComment(comment._id, idPost, jwt);
    if (data.data.Data) {
      console.log(data.data.Data.likeCounter);
      setLikeCounter(data.data.Data.likeCounter);
    }
  };
  const handleDislike = async () => {
    const data = await LikeService.deleteLikeComment(comment._id, idPost, jwt);
    if (data.data.Data) {
      console.log(data.data.Data.likeCounter);
      setLikeCounter(data.data.Data.likeCounter);
    }
  };

  return (
    <StyledComment>
      <div className='usernamediv'>
        <b>{comment.userId.username}</b>
        <span style={{ fontSize: '12px' }}>{DateFormat(comment.date)}</span>
      </div>
      <div className='usernamediv'>
        <p style={{ display: 'inline-block' }}> {comment.content}</p>
        <div className='btndiv'>
          {userId === comment.userId._id && (
            //TODO - options component menu on each comment
            <button
              style={{
                display: 'inline-block',
                marginLeft: '15px',
              }}
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <div className='Like'>
        <span>Likes: {likeCounter}</span>
        <div>
          <button className='LikeButton' onClick={handleLike}>
            +1
          </button>
          <button className='DislikeButton' onClick={handleDislike}>
            -1
          </button>
        </div>
      </div>
      <hr />
    </StyledComment>
  );
};
