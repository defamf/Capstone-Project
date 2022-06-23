import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar,
    Container,
    Nav,
    Form,
    Button
} from "react-bootstrap";

function Header() {
    return (
        <>
            <Navbar expand="lg">
                <Container className='border-bottom border-dark mt-3 pb-2 px-0'>
                    <Navbar.Brand href="#home" className=''>
                        <img
                            src="../assets/Logo_Pakan_Bumi.png"
                            width=""
                            height="62"
                            className="d-inline-block align-top"
                            alt="Logo Pakan Bumi"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="text-navbar justify-content-end">
                            <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
                            <Nav.Link href="#link" className='nav-item'>Tukar Poin</Nav.Link>
                            <Nav.Link href="#link" className='nav-item'>Artikel</Nav.Link>
                            <Nav.Link href="#link" className='nav-item'>Tentang Kami</Nav.Link>
                        </Nav>

                        <Form className="d-flex ms-lg-4">
                            <Button variant="success" className='btn-login-header'>Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;