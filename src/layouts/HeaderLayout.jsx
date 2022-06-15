import React from "react";
import { Navbar, Container, Nav, Button, FormControl, Form } from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/images/Logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-light"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/"><span>Home</span></Nav.Link>
            <Nav.Link as={Link} to="/product"><span>Product</span></Nav.Link>
            <Nav.Link as={Link} to="/cart"><span>Category</span></Nav.Link>
            <Nav.Link as={Link} to="/about"><span>About Us</span></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
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
  );
};

export default Header;
