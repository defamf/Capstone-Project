import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./konfirmasi.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function konfirmasiPembayaran() {
  return (
    <>
      <main>
        <Container className="px-lg-0 px-md-0">
          <img
            src="../assets/success.png"
            class="img-fluid mt-5 mb-5"
            alt="success"
          />
        </Container>
      </main>
    </>
  );
}

export default konfirmasiPembayaran;
