import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {
    Navbar,
    Container,
    Nav,
    Form,
    Button,
    Row,
    Col,
    Card
} from "react-bootstrap";

const Signup = () => {
    return (
        <>
            <header>
                <Navbar variant="dark" expand="lg" className="navbar-bg py-3">
                    <Container>
                        <Navbar.Brand href="#home" className='logo bg-white rounded'>
                            <img
                                src="../assets/Logo_Pakan_Bumi.png"
                                width=""
                                height="62"
                                className="d-inline-block align-top"
                                alt="Logo Pakan Bumi"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className="justify-content-end my-3 my-lg-0"
                        >
                            <Form className="d-flex">
                                <Nav.Link href="#login" className="btn btn-white bg-white text-decoration-none me-2">
                                    Login
                                </Nav.Link>
                                <Nav.Link href="#sign-up" className="btn-white-link">
                                    Sign Up
                                </Nav.Link>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Signup;