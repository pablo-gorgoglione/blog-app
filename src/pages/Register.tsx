import React, { useState } from 'react';

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const [name, setName] = useState<string>('');
  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   console.log(e.target.value);

  return (
    <div>
      <p>Username</p>
      <input value={name} type='text' />
      <p>Password:</p>
      <input type='password' />
      <p>Repeat your password:</p>
      <input type='password' />
      <button>Register</button>
      <button>Cancel</button>
    </div>
  );
};
