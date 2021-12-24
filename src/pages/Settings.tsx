import { ChangePassword } from '../components/Settings/ChangePassword';
import { ChangeUsername } from '../components/Settings/ChangeUsername';
import { useSettings } from '../hooks/useSettings';
import { motion, AnimatePresence } from 'framer-motion';

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
  const { passwordSuccess, usernameSuccess } = useSettings();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ChangeUsername />
        <ChangePassword />

        <br />
        {usernameSuccess && <h2>The username has been changed successfully</h2>}

        <br />
        {passwordSuccess && <h2>The password has been changed successfully</h2>}
      </motion.div>
    </AnimatePresence>
  );
};
