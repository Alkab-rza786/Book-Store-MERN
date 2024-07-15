import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <ul >
                <Link to='/' > <h2>BOOK APP</h2></Link>
                <Link  >All Books</Link>
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
