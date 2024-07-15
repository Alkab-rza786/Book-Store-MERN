import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from './Components/AddBooks/AddBook'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/auth/create-book' element={<AddBook />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
