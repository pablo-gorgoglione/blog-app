import React, { useState } from 'react';

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showName, setShowName] = useState<boolean>(false);

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };
  const toggleShowName = () => {
    setShowName(!showName);
  };

  //TODO - handle changes, validate the passwords equality, and fetch the data

  return (
    <div>
      <h2>Change password</h2>
      <button onClick={toggleShowPass}>Go</button>
      <br />
      <br />
      {showPass && (
        <>
          <input type='password' placeholder='New password' />
          <input type='password' placeholder='Reapeat the password' />
          <button>Change</button>
        </>
      )}

      <hr />
      <h2>Change Username</h2>
      <button onClick={toggleShowName}>Go</button>
      <br />
      <br />
      {showName && (
        <>
          <input type='text' placeholder='New username' />
          <button>Change</button>
        </>
      )}
    </div>
  );
};
