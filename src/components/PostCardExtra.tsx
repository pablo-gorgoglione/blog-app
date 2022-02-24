import { FaCommentAlt, FaHeart } from 'react-icons/fa';
import { IPost } from '../interfaces/interfaces';
import { StyledPostCard } from './styles/PostCard.styled';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PostService from '../services/post';
import { useSnackBar } from '../hooks/useSnackBar';
import { useUser } from '../hooks/useUser';
import { useContext } from 'react';
import PostContext from '../context/post/PostContext';

interface Props {
  post: IPost;
}

const PostCardExtra = ({ post }: Props) => {
  const { openSnackBar } = useSnackBar();
  const {
    user: { token },
  } = useUser();
  const { getPosts } = useContext(PostContext);

  let navigate = useNavigate();

  const editPost = () => {
    navigate(`./edit/${post._id}/`);
  };

  const deletePost = async () => {
    let isExecuted = window.confirm('Are you sure to delete the post?');
    if (isExecuted) {
      try {
        const res = await PostService.deleteOne(post._id, token);
        openSnackBar('Post deleted', false);
        getPosts();
      } catch (error) {
        openSnackBar('Error, post was not deleted ', true);
      }
    }
  };

  return (
    <StyledPostCard
      isLiked={false}
      className='author-postcard'
      style={{ cursor: 'default' }}
    >
      <div className='authorOptions'>
        <div>
          <FaEdit onClick={editPost} />
        </div>
        <div>
          <FaTrash onClick={deletePost} />
        </div>
      </div>
      <div className='title-div'>
        <h4>{post.title}</h4>
        <b>{post.datePublished.substring(0, 10)}</b>
      </div>
      {post.content.length > 100 ? (
        <p>{post.content.substring(0, 100) + ' ...'}</p>
      ) : (
        <p>{post.content}</p>
      )}

      <div className='icons'>
        <div>
          <FaCommentAlt />
          {post.commentCounter}
        </div>
        <div>
          <FaHeart />
          {post.likeCounter}
        </div>
      </div>
    </StyledPostCard>
  );
};

export default PostCardExtra;
