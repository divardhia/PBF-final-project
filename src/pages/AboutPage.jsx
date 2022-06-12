import React, { Component } from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md={2}>
            <Image src="./image/sela.png" width="350px" height="350px" />
          </Col>
          <Col className="text-center">
            <h1 className="fw-bold m-0">ABOUT ME</h1>
            <Row>
              <Col md={8} className="text-start"></Col>
              <ListGroup>
              <h4 className="fw-bold m-0" text-color="#DEB887">SELA AULIA SISWANTO</h4>
              <p className="m-0">NIM        : 1941720196</p>
              <p className="m-0">Class      : TI-3C</p>
              <p className="m-0">Department : Informatic Technology</p>
              <p className="m-0">Email      : 1941720196@student.polinema.ac.id</p>
              <p className="m-0">Address    : Jetis, Mojokerto</p>
              </ListGroup>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}
