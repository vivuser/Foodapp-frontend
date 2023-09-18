import React, { useState } from "react";

const LoginOnCheckout = () => {
    // const [isOpen, setIsOpen] = useState(true)
    
    // const toggleModal = () =>{
    //     setIsOpen(!isOpen)
    // }


    return ( 
    <>
        {   ( 
            <div>
            <p className="text-sm text-gray-700 pl-8">Enter login details or <span className="text-orange-400">create an account</span></p>
            <div className="mt-4 ml-8 w-86 h-16 pl-1 border border-solid border-gray-400">
            <label htmlFor="phone" className="block text-xs text-gray-500 p-1">
            Phone Number
            </label>
            <input type="tel" id="phone" name="phone" style={{ outline: 'none' }} />
            </div>
            <button className="bg-green-300 m-3 ml-8 pr-8 pl-8 h-12 w-80 font-bold text-sm">Login</button>
            </div>
            )
            }
            </>)

            

}

export default LoginOnCheckout;