import React from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
const About = () => {
  return (
    <>
      <h1>About page</h1>
      <Row>
        <Col sm={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Link to="home">Home</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="login">Login</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col sm={9}>
          <Outlet />
        </Col>
      </Row>
    </>
  )
}

export default About
