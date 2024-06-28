import React, { useState } from 'react';
import './navbaar.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Countr() {
    const navigate = useNavigate();
    const [result, setResult] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState('');

    function submitResult() {
        if (password === repassword) {
            setResult({username,password,repassword})
            setError(false)
            axios.post('http://localhost:5002/signup', { username, password })
                .then(response => {
                    console.log(response.data);
                    // Optionally, navigate to login or show success message
                    // navigate('/login');
                })
                .catch(error => {
                    console.error('Error:', error.response.data);
                    setError('Signup failed'); // General error message for unexpected errors
                });
        } else {
            setError('Your passwords do not match');
        }
    }

    return (
        <div>
            <nav className="navbar">
                <div className="signup-container">
                    <h2>Signup</h2>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" name="repassword" placeholder="RePassword" onChange={(e) => setRepassword(e.target.value)} />
                    {error && <p>{error}</p>}
                    <button onClick={submitResult} type="submit">Submit</button>
                </div>
            </nav>
        </div>
    );
}

export default Countr;