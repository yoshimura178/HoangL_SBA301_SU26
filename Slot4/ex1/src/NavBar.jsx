import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import BootstrapNavbar from 'react-bootstrap/Navbar'

function NavBar() {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary app-navbar">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          Single Page Application
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#orchids">Link</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default NavBar
