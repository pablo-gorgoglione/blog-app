import { IComment } from '../interfaces/interfaces';
import { StyledComment } from './styles/Comment.styled';

interface CommentProps {
  comment: IComment;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <StyledComment>
      <b>{comment.userId.username}</b>
      <br />
      <p style={{ display: 'inline-block' }}> {comment.content}</p>
      <button style={{ display: 'inline-block', marginLeft: '15px' }}>
        Like
      </button>
      {comment.likeCounter > 0 && <p>likes: {comment.likeCounter}</p>}
      <hr />
    </StyledComment>
  );
};
