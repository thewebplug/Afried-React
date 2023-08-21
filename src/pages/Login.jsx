import React from 'react';
import Header from '../components/Header';
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='login'>
           <Header noLogin={true} />
           <div className='hero'>
            <div className='hero_login'>
                <div className='input_title'>Welcome!</div>
                <div className='input_subtitle'>Sign in to access your account.</div>
                <input className='input' placeholder='Email' type="text" />
                <input className='input' placeholder='Password' type="password" />
                <div className='login_flex-space'>
                    <div className='login_flex'>
                <input className='check' type='checkbox' />
                Remeber me
                </div>
                <div className='green'>Forgot Password</div>
                </div>
                <button>Login</button>

                <div>Don't have an account <span className='green' onClick={() => navigate('/signup')}>Sign up</span></div>
            </div>
            </div> 
        </div>
    )
}

export default Login;