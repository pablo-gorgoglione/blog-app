import React from 'react';
import { StyledRegister } from '../components/styles/Register.styled';

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = () => {
  return (
    <StyledRegister>
      <div className='container'>
        <h1>Register</h1>
        <p>Username</p>
        <input type='text' />
        <p>Password</p>
        <input type='password' />
        <p>Repeat the password</p>
      </div>
    </StyledRegister>
  );
};
