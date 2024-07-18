import React from 'react'
import './SearchBook.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBook() {
    const [books, setBook] = useState([]);
    const [input, setInput] = useState('')

    const hanldeChange = (e) => {
        setInput(e.target.value);
    }

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
        <div className='search-book'>
            <div className="input-box">
                <input type="text" name="input" id="" placeholder='Enter Book Name here ..'
                    onChange={hanldeChange}
                />
            </div>
            <div className="book-display">
                {

                    books.map(books => (
                        books.name === input ?
                            <div key={books._id} className='books'>
                                <h1>{books.name}</h1>
                                <h2>{books.authorName}</h2>
                                <p>{books.description}</p>
                                <p>{books.price}</p>
                                <p>{books.categories}</p>
                                <div className="btn"><button>save</button></div>

                            </div>
                            : ""

                    ))
                }
            </div>

        </div>
    )
}

export default SearchBook
