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
        >
            <div className='p-2 m-8 text-orange-600 text-md'>
            New here?    
            <a className='pl-2 ' onClick={Register}>create an account</a>
            </div> 
            <div className='pl-20'>
            {login ? <Login/> : <Signup/>}
            </div>
            <button
            className='absolute top-4 right-4 text-gray-600 hover:text-gray-800' 
            onClick={onClose}
            >
                Close
            </button>
        </div>
    )
}

export default SideDrawer;