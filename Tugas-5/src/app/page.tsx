"use client";
import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";

const produk = [
  { nama: "Poster Gojo A3", harga: "Rp 35.000", gambar: "/images/banner_01.jpg" },
  { nama: "Wallpaper Pack", harga: "Rp 15.000", gambar: "/images/banner_02.jpg" },
  { nama: "Poster Gojo A4", harga: "Rp 25.000", gambar: "/images/banner_03.jpg" },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>

        <section id="tentang" className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <img src="/images/banner_03.jpg" alt="Tentang Mugen Art" className="img-fluid rounded" />
              </Col>
              <Col md={6}>
                <h2>Tentang Kami</h2>
                <p>
                  Mugen Art adalah toko kecil yang menjual poster dan wallpaper anime.
                  Kami mulai berjualan dari tahun 2024 lewat media sosial dan sekarang
                  sudah mengirim pesanan ke berbagai kota di Indonesia.
                </p>
                <p>Semua poster dicetak sendiri dan dikemas dengan tabung supaya tidak terlipat.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="koleksi" className="py-5 section-gelap">
          <Container>
            <h2 className="text-center mb-4">Koleksi</h2>
            <Row>
              {produk.map((item) => (
                <Col key={item.nama} sm={6} lg={4} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={item.gambar} className="card-gambar" />
                    <Card.Body>
                      <Card.Title>{item.nama}</Card.Title>
                      <Card.Text>{item.harga}</Card.Text>
                      <Button variant="primary" href="#kontak">Pesan</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="kontak" className="py-5">
          <Container>
            <h2 className="text-center mb-4">Kontak</h2>
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                  </Form.Group>
                  <Button variant="primary" type="submit">Kirim</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className="footer text-center py-3">
        <small>&copy; 2026 Mugen Art</small>
      </footer>
    </div>
  );
}
