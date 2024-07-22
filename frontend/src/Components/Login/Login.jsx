import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4001/book/login', { email, password }).
            then(result => {
                console.log(result)
                navigate('/auth/all-book')
            }).catch(err => console.log(err))
    }



    return (
        <div className='login'>

            <form onSubmit={handleSubmit} className='form-login' >
                <h1>Login</h1>

                <div className="input ">
                    <input type="email" placeholder='email' name='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input ">
                    <input type="password" placeholder='password' name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="btn login-btn">
                    <button>
                        Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login





