import { AnimatePresence, motion } from 'framer-motion';
import { useSnackBar } from '../hooks/useSnackBar';
import { StyledSnackBar } from './styles/SnackBar.styled';

interface SnackBarProps {}

export const SnackBar: React.FC<SnackBarProps> = () => {
  const { snackBarState } = useSnackBar();
  const { text, isOpen } = snackBarState;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StyledSnackBar>{text}</StyledSnackBar>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
