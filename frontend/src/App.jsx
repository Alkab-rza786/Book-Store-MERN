import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from './Components/AddBooks/AddBook'
import AllBooks from './Components/AllBooks/AllBooks'
import SearchBook from './Components/SearchBook/SearchBook'
import Login from './Components/Login/Login'

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/auth/create-book' element={<AddBook />} ></Route>
        <Route path='/auth/all-book' element={<AllBooks />} ></Route>
        <Route path='/auth/search-book' element={<SearchBook />} ></Route>
        <Route path='/auth/login' element={<Login />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
