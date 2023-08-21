import React from 'react';
import Header from '../components/Header';
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate()
    return (
        <div className='login'>
           <Header noLogin={true} />
           <div className='hero'>
            <div className='hero_login'>
                <div className='input_title'>Welcome!</div>
                <div className='input_subtitle'>Sign up to access your account.</div>
                <input className='input' placeholder='Full Name' type="text" />
                <input className='input' placeholder='Email' type="email" />
                <input className='input' placeholder='Phone Number' type="text" />
                <input className='input' placeholder='Password' type="password" />
                <input className='input' placeholder='Confirm Password' type="password" />
                
                <button>Signup</button>

                <div>Already have an account? <span className='green' onClick={() => navigate('/login')}>Log in</span></div>
            </div>
            </div> 
        </div>
    )
}

export default Signup;