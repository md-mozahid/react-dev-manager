import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  profession: '',
  age: '',
  image: '',
}

const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState(initialData)
  const [errors, setErrors] = useState(false)

  const { firstName, lastName, email, profession, age, image } = contact

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(contact)
    addContact(contact)

    // form validation
    const userError = {
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      age: '',
      image: '',
    }
    let isError = false

    if (firstName === '') {
      isError = true
      userError.firstName = 'Please input first name'
    } else if (firstName.length <= 1) {
      isError = true
      userError.firstName = 'Min 2 character'
    }
    if (lastName === '') {
      isError = true
      userError.lastName = 'Please input last name'
    } else if (lastName.length <= 1) {
      isError = true
      userError.lastName = 'Min 2 character'
    }
    setErrors(userError)
    if (isError) return
  }
  ;<ToastContainer />

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h2 className="text-center">Add Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="firstName" column>
              First Name :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={handleChange}
            />
          </Col>
          <p>{errors}</p>
          <Col sm={3}>
            <Form.Label htmlFor="lastName" column>
              Last Name :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={handleChange}
            />
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="email" column>
              Email :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="profession" column>
              Profession :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="profession"
              name="profession"
              id="profession"
              placeholder="Profession"
              value={profession}
              onChange={handleChange}
            />
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="image">Profile Picture :</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="image"
              id="image"
              placeholder="Profile picture link"
              value={image}
              onChange={handleChange}
            />
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="age" column>
              Age :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="age"
              name="age"
              id="age"
              placeholder="Age"
              value={age}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary" size="md">
          Add Contact
        </Button>
      </Form>
    </>
  )
}

export default AddContact
