import React, { useState } from 'react'
import LoginOnCheckout from './LoginOnCheckout'
import axios from 'axios';

const SignUpOnCheckout = () => {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [phone, setPhone] = useState([])

  const [isSignInOpen, setIsSignInOpen] = useState(false)
    
  const openSignIn = () =>{
      setIsSignInOpen(true)
  }

  const handleContinue = async(e) => {
    e.preventDefault();
    try {
        const otpStatus = await axios.post('http://localhost:8080/signupOnCheckout', {
          name,
          email,
          phone
        },
        {
          headers: {
              Authorization:  `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
          }
       })
    }
    catch (error) {
      console.error('Error:', error);
    }
  };


  return  ( 
    <>
        { !isSignInOpen &&  ( 
            <div>
            <p className="text-sm text-gray-700 pl-8">Sign up or <span className="text-orange-400" onClick={openSignIn}>login into your account</span></p>
            <div className="mt-4 ml-8 w-86 h-16 pl-1 border border-solid border-gray-400">
          
            <label htmlFor="phone" className="block text-xs text-gray-500 p-1">
            Phone Number
            </label>
            <input type="tel" id="phone" name="phone" style={{ outline: 'none' }} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          

            <div className="ml-8 w-86 h-16 pl-1 border border-solid border-gray-400">
            <label htmlFor="phone" className="block text-xs text-gray-500 p-1">
            Name
            </label>
            <input type="tel" id="phone" name="phone" style={{ outline: 'none' }}  value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
           

            <div className="ml-8 w-86 h-16 pl-1 border border-solid border-gray-400">
            <label htmlFor="phone" className="block text-xs text-gray-500 p-1">
            Email
            </label>
            <input type="tel" id="phone" name="phone" style={{ outline: 'none' }} value={email} onChange={(e) => setEmail(e.target.value)}/>
           
            </div>
            <button className="bg-green-400 m-3 ml-8 pr-8 pl-8 h-12 w-80 font-bold text-sm" onClick={handleContinue}>Continue</button>
            
            </div>
            )
            }
              {isSignInOpen &&  <LoginOnCheckout />}
            </>)

}

export default SignUpOnCheckout
