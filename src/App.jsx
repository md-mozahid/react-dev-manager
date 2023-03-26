import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacts from './contacts/Contacts'
import About from './layout/About'
import Header from './layout/Header'
import Home from './layout/Home'
import HomeNested from './layout/HomeNested'
import Login from './layout/Login'
import NotFound from './layout/NotFound'
import Register from './layout/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />}>
            <Route path="HomeNested/:name" element={<HomeNested />} />
          </Route>
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/About" element={<About />}>
            <Route path="home" element={<Home />} />
            <Route path="Login" element={<Login />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
