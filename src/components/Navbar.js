import React, { Fragment } from "react";
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';


const NavbarComponent = () => (
    <Fragment>
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="#home">EcoVerde Inc.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Services</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Fragment>
)


export default NavbarComponent;