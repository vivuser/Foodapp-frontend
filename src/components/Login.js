import React, { useState } from 'react';
import Signup from './Signup';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({
    email:"",
    password:""
  })

  const handleChange = e =>{
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit =async(e)=> {
    e.preventDefault();
    try{
      const loginData = await axios.post("http://localhost:8080/login", {...form},
      {
        headers: {
            Authorization:  `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        }
        })
    }
    
    catch (error) {
      console.error('Error:', error);
  }
}

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {/* Login Form */}
      <div className='flex flex-col items-center justify-center space-y-4'>
        <h1 className='font-bold text-2xl mb-4'>Login</h1>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className='p-2 border rounded-md'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='p-2 border rounded-md'
          onChange={handleChange}
        />
        <button className='p-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md'
        onClick={handleSubmit}>Submit</button>
      </div>
      
      {/* Registration Form */}
      <div className='flex flex-col items-center justify-center space-y-4 w-1/2'>
        {/* <Signup /> */}
      </div>
    </div>
  );
};

export default Login;
