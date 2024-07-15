import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <ul >
                <h2>BOOK APP</h2>
                <Link to='/' >All Books</Link>
                <Link to='/auth/create-book' >Add Book</Link>
                <Link>Search Book</Link>
                <Link>My Book</Link>
            </ul>
            <div className="btn">
                <button>Login/Signup</button>
            </div>
        </div>
    )
}

export default Navbar
