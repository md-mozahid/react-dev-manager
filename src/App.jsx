import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddContact from './contacts/AddContact'
import Header from './layout/Header'
import Contacts from './contacts/Contacts'
import DatePicker from '../src//components/DatePicker'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Contacts />} />
          <Route path="/About" element={<DatePicker />} />
        </Routes>
      </BrowserRouter>
      {/* <Contacts /> */}
    </>
  )
}

export default App
