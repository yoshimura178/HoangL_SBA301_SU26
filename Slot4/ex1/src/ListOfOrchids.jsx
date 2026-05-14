import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { orchids } from './data/orchidsdata'

function ListOfOrchids() {
  return (
    <Container id="orchids" className="orchids-section">
      <Row className="g-4">
        {orchids.map((orchid) => (
          <Col md={3} sm={6} xs={12} key={orchid.id}>
            <Card className="orchid-card">
              <Card.Img variant="top" src={orchid.image} alt={orchid.name} />
              <Card.Body>
                <Card.Title>{orchid.name}</Card.Title>
                <Card.Text>{orchid.category}</Card.Text>
                <Button variant="primary">Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ListOfOrchids
