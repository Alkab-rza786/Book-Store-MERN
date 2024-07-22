import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post('http://localhost:4001/auth/logout').
            then(result => {
                console.log("IT is working ")
                console.log(result)
                navigate('/auth/register')
            }).catch(err => console.log(err))
    }

    return (
        <div className='navbar'>
            <ul >
                <Link to='/' > <h2>BOOK APP</h2></Link>
                <Link to='/auth/all-book' >All Books</Link>
                <Link to='/auth/create-book' >Add Book</Link>
                <Link to='/auth/search-book'>Search Book</Link>
                <Link>My Book</Link>
            </ul>
            <div className="btn">
                <Link to='/auth/login'><button>sign up</button></Link>
                <Link to='/auth/register'> <button>
                    login</button></Link>
                <button onClick={handleLogout} >logout</button>
            </div>
        </div>
    )
}

export default Navbar
