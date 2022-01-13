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
  const { likedPosts, isLoading_User } = useUser();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading_User && post._id) {
      setIsLiked(likedPosts.includes(post._id));
    }
  }, [isLoading_User, post._id, likedPosts]);

  const goToPost = () => {
    navigate(`../post/${post._id}`);
  };

  return (
    <StyledPostCard isLiked={isLiked} onClick={goToPost}>
      <div>
        <h4>{post.title}</h4>
      </div>
      {post.content.length > 100 && (
        <p>{post.content.substr(0, 100) + ' ...'}</p>
      )}
      {/* <p>{post.content} </p> */}

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
