import { ChangePassword } from '../components/Settings/ChangePassword';
import { ChangeUsername } from '../components/Settings/ChangeUsername';
import { motion, AnimatePresence } from 'framer-motion';

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ChangeUsername />
        <ChangePassword />
      </motion.div>
    </AnimatePresence>
  );
};
