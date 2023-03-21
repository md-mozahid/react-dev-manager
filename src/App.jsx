import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Contacts from './contacts/Contacts'
import Header from './layout/Header'
import { UserData } from './userData/UserData'

function App() {
  const [contacts, setContacts] = useState(UserData)
  return (
    <>
      <Header />
      <Container style={{ width: '800px', margin: '0 auto' }} className='pt-3'>
        <Contacts contacts={contacts} />
      </Container>
    </>
  )
}

export default App
