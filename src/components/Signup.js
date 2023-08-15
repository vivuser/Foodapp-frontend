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
            
            const responseComing = await axios.post('http://localhost:8080/signUp', {
                firstName,
                lastName,
                email,
                password
            },
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNzdGdzc2ZkYXNkc2V3YW9zc3NzdHdlc3RAc3Nzb2h1LmNvbSIsImlhdCI6MTY5MTkzOTk5Mn0.aQV8FSHFf7vvYhsBxlazJyr6JtbFI7oTnnEJoQRgU15lu8Mu3j56SgghuqWGHrPr7dINNIHVUYwj3z9vJYxIp5rWbTcfkjQ420x59sF5Fk9s-WRGcncu5AjXbDSryCqamk5qkPVqGmXww5ZzPdlRLLlxS2osrWA-Z47h1w5esAhgBzxqrmTTx0FS10DmbnlecnAhyz7lvBlarJ6nucsRyyi7CQTCEoxLfnUbprSprHQSyOwt16RWTYA3meHH-ljgE45SM5he5bjR0U9Xx3dij-yExDsiptN5svtkOhc1Wfn6P04TVoE58LTJTnL5q9UbBxC3OOh1tVG836W8vUouqw`
                }
            });

            console.log('Response received:', responseComing.data);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1 className='font-bold text-2xl mb-4'>Register</h1>
            <div className='flex flex-col space-y-4'>
                <input type='name' value={firstName} placeholder='first name' onChange={(e) => setFirstName(e.target.value)} className='p-2 border rounded-md'/>
                <input type='name' value={lastName} placeholder='last name' onChange={(e) => setLastName(e.target.value)} className='p-2 border rounded-md'/>
                <input type='email' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} className='p-2 border rounded-md'/>
                <input type='password' value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} className='p-2 border rounded-md'/>
                <button className='p-2 bg-purple-900 text-white rounded-md' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Signup;
