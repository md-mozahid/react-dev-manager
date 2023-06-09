import { Button, Card, ListGroup } from 'react-bootstrap'
import { FaEye, FaRegTrashAlt } from 'react-icons/fa'

const Contact = ({ contact, deleteContact }) => {
  const { firstName, lastName, email, profession, dateOfBirth, image, id } = contact
  return (
    <>
      <Card className="mt-3 shadow">
        <div className="d-flex center p-3">
          <Card.Img className="cardImg " src={image} />
          <Card.Body>
            <Card.Title>First Name : {firstName}</Card.Title>
            <Card.Subtitle>Last Name: {lastName}</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>Email :{email}</ListGroup.Item>
              <ListGroup.Item>Profession :{profession}</ListGroup.Item>
              <ListGroup.Item>Date of Birth: {dateOfBirth}</ListGroup.Item>
            </ListGroup>
            <Card.Link>
              <Button variant="warning ms-3 mt-2" size="md">
                <FaEye />
              </Button>
            </Card.Link>
            <Card.Link>
              <Button
                variant="danger ms-3 mt-2"
                size="md"
                onClick={() => deleteContact(id)}>
                <FaRegTrashAlt />
              </Button>
            </Card.Link>
          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default Contact
