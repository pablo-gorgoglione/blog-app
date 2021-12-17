import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../interfaces/interfaces';
import { StyledPostCard } from './styles/PostCard.styled';

interface Props {
  post: IPost;
}
export const PostCard: React.FC<Props> = ({ post }) => {
  let navigate = useNavigate();

  const goToPost = () => {
    navigate(`../post/${post._id}`);
  };

  return (
    <StyledPostCard onClick={goToPost} className='testtest'>
      <h4>{post.title}</h4>
      {post.content.length > 100 && (
        <p>{post.content.substr(0, 100) + ' ...'}</p>
      )}
      {/* <p>{post.content} </p> */}
      <section>
        <p>Tags: {post.tags.map((t) => t + ' ')} </p>
        <p>likes: {post.likeCounter} </p>
      </section>
    </StyledPostCard>
  );
};
