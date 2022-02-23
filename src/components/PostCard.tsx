import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../interfaces/interfaces';
import { StyledPostCard } from './styles/PostCard.styled';
import { FaHeart } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
import { useUser } from '../hooks/useUser';

interface Props {
  post: IPost;
}
export const PostCard: React.FC<Props> = ({ post }) => {
  let navigate = useNavigate();
  const {
    user: { likedPosts },
    loading,
  } = useUser();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && post._id && likedPosts) {
      setIsLiked(likedPosts.includes(post._id));
    }
  }, [loading, post._id, likedPosts]);

  const goToPost = () => {
    navigate(`../post/${post._id}`);
  };

  return (
    <StyledPostCard isLiked={isLiked} onClick={goToPost}>
      <div className='title-div'>
        <h4>{post.title}</h4>
        <b>{post.datePublished.substring(0, 10)}</b>
      </div>
      {post.content.length > 100 ? (
        <p>{post.content.substring(0, 100) + ' ...'}</p>
      ) : (
        <p>{post.content}</p>
      )}

      <div className='last-div'>
        <ul>
          {post.tags.map((t) => (
            <li key={t} className='tag'>
              {t}
            </li>
          ))}
        </ul>

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
      </div>
    </StyledPostCard>
  );
};
