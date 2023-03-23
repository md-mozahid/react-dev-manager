import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./contacts/AddContact";
import Contacts from "./contacts/Contacts";
import Header from "./layout/Header";
import { UserData } from "./userData/UserData";

function App() {
  const [contacts, setContacts] = useState(UserData);

  const addContact = (contact) => {
    let contactToAdd = {
      id: uuidv4(),
      ...contact,
    };
    setContacts([contactToAdd, ...contacts]);
  };
  const deleteContact = (id) => {
    console.log(id);
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    toast.success("Delete successfully !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <Header />
      <Container style={{ width: "800px", margin: "0 auto" }} className="pt-3">
        <AddContact addContact={addContact} />
        <Contacts contacts={contacts} deleteContact={deleteContact} />
        <ToastContainer autoClose={1000} hideProgressBar />
      </Container>
    </>
  );
}

export default App;
