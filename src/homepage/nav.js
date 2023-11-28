import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BasicExample() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className='main_title' style={{ textAlign: 'left', margin: 15 }}>
            BLANCE | <span className="d-block d-sm-inline">Architect &amp; Engineering</span>
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Portfolio</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Pricing
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.facebook.com/Blancedesign/"
                target="_blank"
                className="social-icon"
                style={{ fontSize: '24px' }}>
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="#"
                target="_blank"
                className="social-icon"
                style={{ fontSize: '24px' }}>
                <FaTwitter />
              </Nav.Link>
              <Nav.Link
                href="#" target="_blank"
                className="social-icon"
                style={{ fontSize: '24px' }}>
                <FaInstagram />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;