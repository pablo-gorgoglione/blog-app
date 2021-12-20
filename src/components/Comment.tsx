import { IComment } from '../interfaces/interfaces';
import { StyledComment } from './styles/Comment.styled';
import CommentService from '../services/comment';

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
    if (res.data.Data) {
      getAllComments();
    }
  };

  return (
    <StyledComment>
      <b>{comment.userId.username}</b>
      <br />
      <p style={{ display: 'inline-block' }}> {comment.content}</p>
      <button style={{ display: 'inline-block', marginLeft: '15px' }}>
        Like
      </button>
      <button
        style={{
          backgroundColor: 'red',
          display: 'inline-block',
          marginLeft: '15px',
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
      {comment.likeCounter > 0 && <p>likes: {comment.likeCounter}</p>}
      <hr />
    </StyledComment>
  );
};
