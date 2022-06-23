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

function HomeMain() {
    return (
        <>
            <main>
                <Container className='px-lg-0 px-md-0'>
                    <h1 className='title-home text-center'>Mengelola Sampah Secara <br />Bertanggung Jawab Bersama Pakan Bumi</h1>
                    <p className='subtitle-home text-center'>Kirim sampah makananmu dan kumpulkan point untuk ditukarkan <br /> dengan voucher atau uang tunai</p>

                    <img src="../assets/hero-image.png" class="img-fluid mt-5 mb-5" alt="Food Waste" />
                </Container>
            </main>
        </>
    )
}

export default HomeMain;