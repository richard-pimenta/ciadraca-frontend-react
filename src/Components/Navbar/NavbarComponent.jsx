import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ReactComponent as Theater } from "../../svgs/theater_comedy.svg";
import { Routes } from "../../Routes/Routes";
// import { Container } from './styles';

function NavbarComponent() {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand as={Link} to={"/"}>
                <Theater />
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  Sobre nós
                </Nav.Link>

                <Nav.Link as={Link} to={"/projetos"}>
                  Projetos
                </Nav.Link>

                <Nav.Link as={Link} to={"/media/socias"}>
                  Medias Socias
                </Nav.Link>

                <Nav.Link as={Link} to={"/contacts"}>
                  Contatos
                </Nav.Link>
              </Nav>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <Form className="mb-3">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Senha" />
                  </Form.Group>
                  <Button variant="outline-success" type="submit">
                    Login
                  </Button>
                </Form>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>

        <Routes></Routes>

      </div>
    </Router>

  );
}
export default NavbarComponent;
