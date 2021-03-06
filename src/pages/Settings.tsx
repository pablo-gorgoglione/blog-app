import { ChangePassword } from '../components/Settings/ChangePassword';
import { ChangeUsername } from '../components/Settings/ChangeUsername';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledSettings } from '../components/styles/Settings.styled';
import { DeleteAccount } from '../components/Settings/DeleteAccount';

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
  return (
    <StyledSettings>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='motiondiv'
        >
          <ChangeUsername />
          <ChangePassword />
          <DeleteAccount />
        </motion.div>
      </AnimatePresence>
    </StyledSettings>
  );
};
