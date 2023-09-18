import React from 'react'

const SignUpOnCheckout = () => {
  return  ( 
    <>
        {   ( 
            <div>
            <p className="text-sm text-gray-700 pl-8">Sign up or <span className="text-orange-400">login into your account</span></p>
            <div className="mt-4 ml-8 w-86 h-16 pl-1 border border-solid border-gray-400">
          
            <label htmlFor="phone" className="block text-xs text-gray-500 p-1">
            Phone Number
            </label>
            <input type="tel" id="phone" name="phone" style={{ outline: 'none' }} />
            </div>
          

            <div className="ml-8 w-86 h-16 pl-1 border border-solid border-gray-400">
            <label htmlFor="phone" className="block text-xs text-gray-500 p-1">
            Name
            </label>
            <input type="tel" id="phone" name="phone" style={{ outline: 'none' }} />
            </div>
           

            <div className="ml-8 w-86 h-16 pl-1 border border-solid border-gray-400">
            <label htmlFor="phone" className="block text-xs text-gray-500 p-1">
            Email
            </label>
            <input type="tel" id="phone" name="phone" style={{ outline: 'none' }} />
           
            </div>
            <button className="bg-green-400 m-3 ml-8 pr-8 pl-8 h-12 w-80 font-bold text-sm">Continue</button>
            
            </div>
            )
            }
            </>)

}

export default SignUpOnCheckout
