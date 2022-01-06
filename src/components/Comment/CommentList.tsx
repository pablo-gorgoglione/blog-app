import { useState } from 'react';
import { IComment, IPost } from '../../interfaces/interfaces';
import CommentService from '../../services/comment';
import { Comment } from '../../components/Comment/Comment';
import { motion } from 'framer-motion';
import { CommentForm } from './CommentForm';
import { useSnackBar } from '../../hooks/useSnackBar';
import { StyledCommentList } from '../styles/CommentList.styled';
import { useUser } from '../../hooks/useUser';

interface CommentListProps {
  getAllComments: () => void;
  comments: IComment[];
  post: IPost;
  jwt: string;
  userId: string;
}

export const CommentList: React.FC<CommentListProps> = ({
  getAllComments,
  post,
  jwt,
  comments,
  userId,
}) => {
  const [newcomment, setNewComment] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { openSnackBar } = useSnackBar();
  const { isLog } = useUser();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCommChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLog) {
      if (newcomment.trim().length >= 5) {
        const res = await CommentService.createOne(
          post._id,
          jwt,
          newcomment
        ).catch((err) => {
          console.log(err.response);
        });
        if (res) {
          if (res.data.Data) {
            console.log(res);
            openSnackBar('Comment created!', false);
            getAllComments();
            setNewComment('');
            setIsOpen(true);
          }
        }
      } else {
        openSnackBar('Comment must be at least 5 characters', true);
      }
      return;
    }
    openSnackBar('Login to comment', true);
  };
  return (
    <StyledCommentList>
      <CommentForm
        newcomment={newcomment}
        handleCommChange={handleCommChange}
        handleCommentSubmit={handleCommentSubmit}
      ></CommentForm>

      <div className='general-container'>
        <div className='header-container'>
          <span onClick={toggleIsOpen}>Comments {comments.length} </span>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='main-container'
          >
            {comments.length > 0 &&
              comments.map((c) => {
                return (
                  <Comment
                    userId={userId}
                    key={c._id}
                    comment={c}
                    idPost={post._id}
                    jwt={jwt}
                    getAllComments={getAllComments}
                  />
                );
              })}
          </motion.div>
        )}
      </div>
    </StyledCommentList>
  );
};
