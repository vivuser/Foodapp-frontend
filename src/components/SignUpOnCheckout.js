import React, { useState } from 'react'
import LoginOnCheckout from './LoginOnCheckout'
import axios from 'axios';

const SignUpOnCheckout = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")

  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isOtp, setIsOTP] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
    
  const openSignIn = () =>{
      setIsSignInOpen(true)
  }
  const closeSignIn = () =>{
    setIsSignInOpen(false)
  }
  const showOtpField = () => {
    setIsOTP(true)
  }

  const setLogin = () => {
    setIsLogin(true)
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
       closeSignIn()
       showOtpField()
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  const handleVerifyOtp = async(e) => {
    e.preventDefault();
    try {
      const verifyOtp = await axios.post('http://localhost:8080/verifyOTP', {
        email,
        otp
      },
      {
        headers: {
            Authorization:  `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        }
     })
     setLogin()
    }
    catch(error) {
      console.error('Error:', error);
    }
  };

  return  ( 
    <>
    {isLogin && 
      <div>
      <h1 className='text-orange-500 text-2xl font-bold pl-10'>Hello, {name}.<br/><p className='text-lg text-orange-600 font-normal'>Ready for some goodie foodie</p></h1>
      </div>}
      {isOtp && !isLogin && (
        <div className="mt-4 ml-8 w-86 h-16 pl-1 border border-solid border-gray-400">
        <label htmlFor="phone" className="block text-xs text-gray-500 p-1">
          OTP
        </label>
        <input className='h-9 w-56' type="text" id="otp" name="otp" style={{ outline: 'none' }}  value={otp} onChange={(e)=>setOtp(e.target.value)}  />
        <button className="bg-green-400 m-3 ml-1 pr-8 h-12 w-80 font-bold text-sm" onClick={handleVerifyOtp}>Verify OTP</button>
        
        </div>
        )
          }
        { !isSignInOpen &&  !isOtp && ( 
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
