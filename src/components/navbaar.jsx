import React from 'react';
import './navbaar.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function Counter() {
    const navigate = useNavigate();
    const [result, setResult] = useState('');
    const [username, setUser] = useState('');
    const [passward, setPass] = useState('');
    const [repassward,setRepas] = useState('');
    const [error,setError] = useState(false)
    const [fear,setFear] = useState(false)
    function submitResult(){
        if(passward==repassward){
            setResult({username,passward,repassward})
            setError(false)
            // navigate('/login')
            axios.post('http://localhost:5004/navbaar',{username,passward})
            
        }
        
        else{
            setError(true)
        }
    }
    function submitUser(e){
        setUser(e.target.value)
    }
    function submitPassword(e){
        setPass(e.target.value)
    }
   function submitRepassword(e){
    setRepas(e.target.value)
   }


    return (
        <div>
            
            <nav className="navbar">
            <div className="signup-container">
                <h2>Signup</h2>
                    <input type="text" name="username" placeholder="Username" onChange={submitUser} />
                    <input type="password" name="password" placeholder="Password" onChange={submitPassword} />
                    <input type="password" name="repassword" placeholder="RePassword" onChange={submitRepassword} />
                    {
                        error==true? <p>Your password does not match</p>:<>{
                            result.username} {result.passward} {result.repassward}</>
                    }
                    {}
                       
                    <button onClick={submitResult} type="submit">Submit</button>
                    
            
            </div>
        </nav>
        </div>
    );
}

export default Counter;
