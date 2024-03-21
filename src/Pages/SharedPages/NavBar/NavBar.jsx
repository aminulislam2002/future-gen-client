import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{ backgroundImage: `linear-gradient(90deg, #111c58 0, #5c2782 51%, #111c58)`, color: "white" }}
    >
      <Container fluid className="container mx-auto">
        <Navbar.Brand className="text-white" href="/">
          FutureGen IT Media
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto me-2 my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link className="text-white" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="text-white" href="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success" className="btn-get-a-quote">
              Get A Quote
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
