import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const SideDrawer = ( { isOpen, onClose }) => {
    const [login, setLogin] = useState(true)

    const Register = () => {
        setLogin(!login)
    }

    return (
        <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform
        ${isOpen ? 'translate-x-0 z-50' : 'translate-x-full'} 
         transition-transform duration-300 ease-in-out w-96`}
        >{login ? 
            <div className='p-2 m-8 text-orange-400 text-md'>
            New here?    
            <a className='pl-2 text-orange-400' onClick={Register} style={{ textDecoration: 'underline', cursor: 'pointer'}}>create an account</a>
            <img className='pl-14 pt-5' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
            </div> 
            :
            <div className='p-2 m-8 text-orange-400 text-md'>
            Already have an account?    
            <a className='pl-2 ' onClick={Register} style={{ textDecoration: 'underline', cursor:'pointer'}}>Login</a>
            <img className='pl-14 pt-5' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
            </div> }
            <div className='flex pl-20 w-80 min-h-screen justify-center'>
            {login ? <Login/> : <Signup/>}
            </div>
            <button
            className='absolute top-4 right-4 text-gray-600 hover:text-gray-800 font-bold bg-gray-200 rounded-full w-7 text-lg' 
            onClick={onClose}
            >
                X
            </button>
        </div>
    )
}

export default SideDrawer;