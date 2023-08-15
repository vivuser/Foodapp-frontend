import React, { useState } from 'react';
import Signup from './Signup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {/* Login Form */}
      <div className='flex flex-col items-center justify-center space-y-4 w-1/2'>
        <h1 className='font-bold text-2xl mb-4'>Login</h1>
        <input
          type='email'
          value={email}
          placeholder='Email'
          className='p-2 border rounded-md'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Password'
          className='p-2 border rounded-md'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='p-2 bg-purple-900 text-white rounded-md'>Submit</button>
      </div>
      
      {/* Registration Form */}
      <div className='flex flex-col items-center justify-center space-y-4 w-1/2'>
        <Signup />
      </div>
    </div>
  );
};

export default Login;
