import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddContact from "./contacts/AddContact";
import Contacts from "./contacts/Contacts";
import Header from "./layout/Header";
import { UserData } from "./userData/UserData";

function App() {
  const [contacts, setContacts] = useState(UserData);

  const deleteContact = (id) => {
    console.log(id);
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };
  return (
    <>
      <Header />
      <Container style={{ width: "800px", margin: "0 auto" }} className="pt-3">
        <AddContact />
        <Contacts contacts={contacts} deleteContact={deleteContact} />
      </Container>
    </>
  );
}

export default App;
