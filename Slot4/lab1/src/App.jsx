import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousels from "./components/Carousels";
import { Container, Nav, Navbar } from "react-bootstrap";
import Orchid from "./components/Orchid";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Single Page Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousels />
      <Orchid />
    </>
  );
}

export default App;
