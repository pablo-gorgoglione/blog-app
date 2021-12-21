import { ChangePassword } from '../components/Settings/ChangePassword';
import { ChangeUsername } from '../components/Settings/ChangeUsername';
import { useSettings } from '../hooks/useSettings';

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
  const { passwordSuccess, usernameSuccess } = useSettings();

  return (
    <div>
      <ChangeUsername />
      <ChangePassword />
      {usernameSuccess && <h2>The username has been changed successfully</h2>}
      {passwordSuccess && <h2>The password has been changed successfully</h2>}
    </div>
  );
};
