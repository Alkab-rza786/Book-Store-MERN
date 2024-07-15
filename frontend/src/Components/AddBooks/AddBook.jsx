import React from 'react'
import './AddBook.css'

function AddBook() {
    return (
        <div className='add-book' >
            <form action="">
                <h2>Add Book</h2>
                <div className="input">
                    <label htmlFor="name">Enter Book name</label>
                    <input type="text" name='name' id='name' placeholder='name' />
                </div>
                <div className="input">
                    <label htmlFor="name">Enter Author name</label>
                    <input type="text" name='authorName' id='name' placeholder='Author name' />
                </div>
                <div className="input">
                    <label htmlFor="name">Enter Description</label>
                    <input type="text" name='description' id='name'
                        placeholder='Description' />
                </div>
                <div className="input">
                    <label htmlFor="name">Enter price</label>
                    <input type="text" name='description' id='name'
                        placeholder='price' />
                </div>
                <div className="input">
                    <label htmlFor="name">Enter Categories</label>
                    <select name="categories" id="">
                        <option value="">Mathmatices</option>
                        <option value="">English</option>
                        <option value="">JAVA</option>
                        <option value="">PYTHON</option>
                        <option value="">DSA</option>
                    </select>
                </div>
                <div className="btn book-btn"><button>Add Book</button></div>

            </form>
        </div>
    )
}

export default AddBook
