import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navbar1() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className=" fs-2" href="#home">Azaryaa</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;