import { IComment } from '../interfaces/interfaces';
import { StyledComment } from './styles/Comment.styled';
import CommentService from '../services/comment';
import { DateFormat } from '../utils/DateFormatting';

interface CommentProps {
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
}) => {
  const handleDelete = async () => {
    const res = await CommentService.deleteOne(idPost, jwt, comment._id);
    if (res.data.Success === 1) {
      getAllComments();
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
          <button style={{ display: 'inline-block', marginLeft: '15px' }}>
            Like
          </button>
          <button
            style={{
              display: 'inline-block',
              marginLeft: '15px',
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      {comment.likeCounter > 0 && <p>likes: {comment.likeCounter}</p>}
      <hr />
    </StyledComment>
  );
};
