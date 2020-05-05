import React, { Fragment } from "react";
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';

const NavbarComponent = () => (
    <Fragment>
        <Navbar bg="light" expand="md" id="navbar-section">
            <Navbar.Brand href="#home">EcoVerde Inc.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <a href="#services">Services </a>
                    <a href="#about-section">About </a>
                    <a href="mailto:email@email.com">Contact</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Fragment>
)


export default NavbarComponent;