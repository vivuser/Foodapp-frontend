import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const PasswordReset = () => {
    const { resTok } = useParams();

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handlePasswordReset = async(e) => {
        e.preventDefault()
        try {
        const submitResetInfo = await axios.post('http://localhost:8080/reset-password/?token=76c5ce37ec287fbf7c4242276727534769b9fcbbdf0663ea7ecc69c9815eec77',{
        newPassword   
        },  
        {
        headers: {
        Authorization:`Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
      }
    })
  } catch (error) {
    console.error(error)
  }
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
    <div className='flex flex-col items-center justify-center space-y-4'>
        <input
          type='password'
          name='newPassword'
          placeholder='New Password'
          className='p-2 border rounded-md'
          onChange={(e)=>{setNewPassword(e.target.value)}}
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          className='p-2 border rounded-md'
          onChange={(e)=>{setConfirmPassword(e.target.value)}}
        />
      <button className='p-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md'
      onClick={handlePasswordReset}
      >
      Reset Password
      </button>
    </div>
    </div>
  )
}

export default PasswordReset