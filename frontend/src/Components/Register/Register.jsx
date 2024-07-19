import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        axios.post('http://localhost:4001/book/register', { username, email, password }).
            then(result => {
                console.log(result)
                alert("Regiter succesfully")
            }).catch(err => console.log(err))
    }

    return (
        <div className='login'>

            <form action="" className='form-login' onSubmit={handleSubmit} >
                <h1>Sign up</h1>
                <div className="input ">
                    <input type="text" placeholder='username' name='username'
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input ">
                    <input type="email" placeholder='email' name='email'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input ">
                    <input type="password" placeholder='password' name='password'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="btn login-btn">
                    <button>
                        Sign up</button>
                    <button><Link to='/auth/register'>
                        login</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Register
