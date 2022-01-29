
import {Navbar,Nav,Container} from  'react-bootstrap'

export const NavBar = () => {
  return (
    <div className="App">
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#Dana">Dana Palazzo</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#inicio">Inicio</Nav.Link>
      <Nav.Link href="#sobremi">Sobre mí</Nav.Link>
      <Nav.Link href="#experiencia">Experiencia</Nav.Link>
      <Nav.Link href="#contacto">Contacto</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    </div>
  );

}

