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

function konfirmasiSukses() {
  return (
    <>
      <main>
        <Container className="px-lg-0 px-md-0">
          <img
            src="../assets/success.png"
            class="img-fluid mt-5 mb-5"
            alt="success"
          />

          <h1 className="title-home text-center">Pesanan Terkonfirmasi</h1>
          <p className="subtitle-home text-center">Receipt #JSH930438KL</p>
          <h6>
            Driver kami akan menghubungi anda untuk penjemputan sampah makanan,
            mohon persiapkan sampah makanan anda.
          </h6>
          <button className="btnBackHome" align="center">
            Kembali ke Home
          </button>
        </Container>
      </main>
    </>
  );
}

export default konfirmasiSukses;
