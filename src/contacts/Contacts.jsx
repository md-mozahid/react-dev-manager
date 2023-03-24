import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import { UserData } from '../userData/UserData'
import AddContact from './addContact'
import Contact from './Contact'

const Contacts = () => {
  const [contacts, setContacts] = useState(UserData)

  const addContact = (contact) => {
    let contactToAdd = {
      id: uuidv4(),
      ...contact,
    }
    setContacts([contactToAdd, ...contacts])
  }

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(updatedContacts)

    toast.success('Delete successfully !', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
    ;<ToastContainer />
  }

  return (
    <>
      <AddContact addContact={addContact} />
      <h2 className="text-center">All Contacts</h2>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </>
  )
}

export default Contacts
