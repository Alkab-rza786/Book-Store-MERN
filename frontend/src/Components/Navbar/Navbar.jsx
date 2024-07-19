import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
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
                <button>Login/Signup</button>
            </div>
        </div>
    )
}

export default Navbar
