
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            await login(username, password);
            alert("Login successful!");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed");
            alert(error);
        }
    };

    return (
        <div className='bg-gray-200 rounded-xl flex flex-col p-20 justify-center items-center border-2'>
            <h2>Welcome to sign In page</h2>
            <input 
                className='border p-1 m-2 rounded' 
                placeholder='Username' 
                value={username}
                onChange={e => setUsername(e.target.value)} 
                type="text" 
            />
            <input 
                className='border p-1 m-2 rounded' 
                placeholder='Password' 
                value={password}
                onChange={e => setPassword(e.target.value)} 
                type="password" 
            />
            <button 
                className='bg-green-600 font-semibold px-2 py-1 rounded-2xl' 
                onClick={handleLogin}
            >
                Sign In
            </button>
        </div>
    );
};

export default Login;