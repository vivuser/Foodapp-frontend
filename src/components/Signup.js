import axios from 'axios';
import React, { useState } from 'react';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting form data...');
             console.log('Authorization header:', `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`);
            
            const responseComing = await axios.post('http://localhost:8080/signUp', {
                firstName,
                lastName,
                email,
                password
            },
            {
                headers: {
                    Authorization:  `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
                }


            });


            console.log('Response received:', responseComing.data);

            setFirstName("")
            setLastName("")
            setEmail("");
            setPassword("");

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1 className='font-bold text-2xl mb-4 pl-10 justify-center'>Register</h1>
            <div className='flex flex-col space-y-4'>
                <input type='name' value={firstName} placeholder='first name' onChange={(e) => setFirstName(e.target.value)} className='p-2 border rounded-md'/>
                <input type='name' value={lastName} placeholder='last name' onChange={(e) => setLastName(e.target.value)} className='p-2 border rounded-md'/>
                <input type='email' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} className='p-2 border rounded-md'/>
                <input type='password' value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} className='p-2 border rounded-md'/>
                <button className='p-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Signup;
