import React from 'react';
import { PostCard } from './PostCard';
import { IPost } from '../interfaces/interfaces';
import { StyledPostList } from './styles/PostList.styled';

interface Props {
  posts: IPost[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <StyledPostList>
      {posts.map((p) => {
        return <PostCard post={p} key={p._id} />;
      })}
    </StyledPostList>
  );
};
