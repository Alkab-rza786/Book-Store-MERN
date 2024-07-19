import React from 'react'

function Login() {
    return (
        <div className='login'>

            <form action="" className='form-login' >
                <h1>Login</h1>

                <div className="input ">
                    <input type="email" placeholder='email' name='email' />
                </div>
                <div className="input ">
                    <input type="password" placeholder='password' name='password' />
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





