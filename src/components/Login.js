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

const Login = () => {
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
                                <Nav.Link href="#login" className="btn-white-link me-2">
                                    Login
                                </Nav.Link>
                                <Button href='#sign-up' variant="link" className="btn-white bg-white text-decoration-none">
                                    Sign Up
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <main>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center h-100 my-5'>
                        <Col md={8} lg={6} xl={5}>
                            <Card className='form-login text-white'>
                                <Card.Body className='form-body'>
                                    <div>
                                        <div className='d-flex justify-content-between mb-5'>
                                            <Col className='col-9'>
                                                <h2 className='text-title'>Selamat Datang!</h2>
                                            </Col>
                                            <Col className='text-end col-3'>
                                                <img src="../assets/Logo_Pakan_Bumi.png" alt="Logo Pakan Bumi" />
                                            </Col>
                                        </div>

                                        <div class="mb-3">
                                            <Form.Label class="text-email form-label" for="email">Email address</Form.Label>
                                            <Form.Control type="email" id="email" className="input-email form-control form-control-lg" placeholder="Enter your email" />
                                        </div>
                                        <div class="mb-3">
                                            <Form.Label class="text-password form-label" for="password">Password</Form.Label>
                                            <Form.Control type="password" id="password" className="input-password form-control form-control-lg" placeholder="Enter your password" />
                                        </div>

                                        <Row className='justify-content-between'>
                                            <Col>
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="remember" />
                                                <label className="form-check-label text-remember" for="remember">Remember me</label>
                                            </div>
                                            </Col>
                                            <Col>
                                                <p class="text-forgot small text-end mb-0"><a href="#forgot" className='text-decoration-none'>Forgot password?</a></p>
                                            </Col>
                                        </Row>

                                        <div className="d-grid gap-2 mb-3">
                                            <Button href="#login" variant="link" size="lg" className='btn-login-block text-white text-decoration-none'>
                                                Login
                                            </Button>
                                        </div>

                                        <div class="text-center">
                                            <p className='text-no-account text-dark mb-0'>No account? <a href="#sign-up">Sign Up</a></p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer>
                <Container>
                    <p className='footer-brand text-center mb-4'>&copy; PakanBumi 2022</p>
                    <div class="footer-link d-flex flex-row mb-3 justify-content-center gap-4">
                        <p><a href='#cookie' className='text-decoration-none'>Cookie Policy</a></p>
                        <p><a href='#terms' className='text-decoration-none'>Terms Of Use</a></p>
                        <p><a href='#privacy' className='text-decoration-none'>Privacy Policy</a></p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Login;