import { useEffect, useState } from 'react';
import { IComment, IPost } from '../../interfaces/interfaces';
import CommentService from '../../services/comment';
import { Comment } from '../../components/Comment/Comment';
import { motion } from 'framer-motion';
import { CommentForm } from './CommentForm';
import { useSnackBar } from '../../hooks/useSnackBar';

interface CommentListProps {
  getAllComments: () => void;
  post: IPost;
  jwt: string;
  comments: IComment[];
  userId: string;
}

export const CommentList: React.FC<CommentListProps> = ({
  getAllComments,
  post,
  jwt,
  comments,
  userId,
}) => {
  const [addComment, setAddComment] = useState<boolean>(false);
  const [newcomment, setNewComment] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const { openSnackBar } = useSnackBar();

  const handleShowClick = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (!show) {
      setAddComment(false);
    }
  }, [show]);

  const toggleAddComment = () => {
    setAddComment(!addComment);
  };

  const handleCommChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await CommentService.createOne(post._id, jwt, newcomment);
    if (res.data.Data) {
      openSnackBar('Comment created!');
      getAllComments();
      setNewComment('');
      setShow(true);
    }
  };
  return (
    <div>
      <div className='Comment'>
        <div className='CommentButtons'>
          <span className='CommentSpan' onClick={handleShowClick}>
            Comments {comments.length}{' '}
          </span>
          {!show && (
            <button onClick={toggleAddComment} className='ButtonAddComment'>
              Add a comment
            </button>
          )}
        </div>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {comments.length > 0 ? (
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
              })
            ) : (
              <p className='CommentP'>No comments</p>
            )}
          </motion.div>
        )}
        {show && (
          <button onClick={toggleAddComment} className='ButtonAddComment'>
            Add a comment
          </button>
        )}
        {addComment && (
          <CommentForm
            newcomment={newcomment}
            handleCommChange={handleCommChange}
            handleCommentSubmit={handleCommentSubmit}
          ></CommentForm>
        )}
      </div>
    </div>
  );
};
