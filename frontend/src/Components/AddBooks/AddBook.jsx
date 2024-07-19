import React, { useEffect, useState } from 'react'
import './AddBook.css'
import axios from 'axios'

function AddBook() {

    const [book, setBook] = useState({
        name: "",
        authorName: "",
        description: "",
        price: "",
        categories: "",
    })



    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        axios.post('http://localhost:4001/auth/add', book).then(result => {
            console.log(result.data)
            alert("Data sent successfully")
            setBook({
                name: "",
                authorName: "",
                description: "",
                price: "",
                categories: "",
            });
            location.reload();
        }).catch(err => console.log(err))
    }




    return (
        <div className='add-book' >
            <form onSubmit={handleSubmit} >
                <h2>Add Book</h2>
                <div className="input">
                    <label htmlFor="bookName">Enter Book name</label>
                    <input type="text" name='name' id='bookName' placeholder='name'
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="authorName">Enter Author name</label>
                    <input type="text" name='authorName' id='authorName' placeholder='Author name'
                        onChange={handleChange} />
                </div>
                <div className="input">
                    <label htmlFor="description">Enter Description</label>
                    <input type="text" name='description' id='description'
                        placeholder='Description'
                        onChange={handleChange} />
                </div>
                <div className="input">
                    <label htmlFor="price">Enter price</label>
                    <input type="text" name='price' id='price'
                        placeholder='price'
                        onChange={handleChange} />
                </div>
                <div className="input">
                    <label htmlFor="categories">Enter Categories</label>
                    <select name="categories" id="categories"
                        onChange={handleChange} >
                        <option value="Mathematics">Mathematics</option>
                        <option value="English">English</option>
                        <option value="JAVA">JAVA</option>
                        <option value="PYTHON">PYTHON</option>
                        <option value="DSA">DSA</option>
                    </select>
                </div>
                <div className="btn book-btn"><button type="submit">Add Book</button></div>
            </form>
        </div>
    )
}

export default AddBook
