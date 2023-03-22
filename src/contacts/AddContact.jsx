import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  profession: '',
  age: '',
}
const AddContact = () => {
  const { contact, setContact } = useState(initialData)

  const { firstName, lastName, email, profession, age } = contact

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {}
  return (
    <>
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
              // value={firstName}
              onChange={handleChange}
            />
          </Col>
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
              // value={lastName}
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
              // value={email}
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
              // value={profession}
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
              // value={age}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default AddContact
