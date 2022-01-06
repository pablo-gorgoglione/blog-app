import { motion } from 'framer-motion';
import React from 'react';
import { useSnackBar } from '../../hooks/useSnackBar';
import { useUser } from '../../hooks/useUser';

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
  const { isLog } = useUser();
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleCommentSubmit}
    >
      <input
        type='text'
        name='newcomment'
        value={newcomment}
        onChange={handleCommChange}
        placeholder='Add a public comment...'
        disabled={!isLog}
      />

      <div>
        <button type='submit'>Send</button>
      </div>
    </motion.form>
  );
};
