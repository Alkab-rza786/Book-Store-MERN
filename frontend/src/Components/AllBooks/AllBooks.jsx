import React from 'react'
import './AllBooks.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

function AllBooks() {

    const [books, setBook] = useState([]);
    useEffect(() => {

        try {
            axios.get('http://localhost:4001/auth/get/').
                then(book => {
                    setBook(book.data)
                }).catch(err => console.log(err))

        } catch (error) {
            console.log(error)
        }

    }, [])

    return (
        <div className='all-book'>
            {
                books.map(books => (
                    <div key={books._id} className='books'>
                        <h1>{books.name}</h1>
                        <h2>{books.authorName}</h2>
                        <p>{books.description}</p>
                        <p>{books.price}</p>
                        <p>{books.categories}</p>
                        <div className="btn"><button>save</button></div>
                    </div>
                ))
            }

        </div>
    )
}

export default AllBooks
