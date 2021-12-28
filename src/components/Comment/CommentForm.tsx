import { motion } from 'framer-motion';
import React from 'react';

interface CommentFormProps {
  newcomment: string;
  handleCommChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCommentSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({
  newcomment,
  handleCommentSubmit,
  handleCommChange,
}) => {
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='CommentInput'
      onSubmit={handleCommentSubmit}
    >
      <input
        type='text'
        name='newcomment'
        value={newcomment}
        onChange={handleCommChange}
      />
      <button type='submit' className='CommentButtonSend'>
        Send
      </button>
    </motion.form>
  );
};
