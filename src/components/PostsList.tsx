import React from 'react';
import { PostCard } from './PostCard';
import { IPost } from '../interfaces/interfaces';
import { StyledPostList } from './styles/PostList.styled';
import PostCardExtra from './PostCardExtra';

interface Props {
  posts: IPost[];
  author?: boolean;
}

export const PostList: React.FC<Props> = ({ posts, author = false }) => {
  return (
    <StyledPostList>
      {posts.map((p) => {
        return author ? (
          <PostCardExtra post={p} key={p._id} />
        ) : (
          <PostCard post={p} key={p._id} />
        );
      })}
    </StyledPostList>
  );
};
