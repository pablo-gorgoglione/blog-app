import { motion } from 'framer-motion';
import React from 'react';
import { useUser } from '../../hooks/useUser';

interface CommentFormProps {
  newcomment: string;
  handleCommChange: (e: any) => void;
  handleCommentSubmit: () => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({
  newcomment,
  handleCommentSubmit,
  handleCommChange,
}) => {
  const { isLog } = useUser();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <textarea
        className='div-input'
        onChange={handleCommChange}
        value={newcomment}
        placeholder='Add a public comment...'
      />

      <div>
        <button onClick={(e) => handleCommentSubmit()}>Send</button>
      </div>
    </motion.div>
  );
};
