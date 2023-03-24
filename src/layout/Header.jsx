import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link as Links } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand">Dev Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <>
              {/* <Link to="Home">Home</Link>
              <Link to="Contact">Contact</Link> */}
            </>
            <Nav.Link>
              <Links to="Home">Home</Links>
            </Nav.Link>
            <Nav.Link>
              <Links to="About">About</Links>
            </Nav.Link>
            <Nav.Link>
              materials
            </Nav.Link>

            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
