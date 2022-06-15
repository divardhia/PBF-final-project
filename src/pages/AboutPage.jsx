import React, { Component } from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md={2}>
            <Image src="./images/Logo.png" width="300px" height="300px" />
          </Col>
          <Col className="text-center">
            <h1 className="fw-bold m-0">ABOUT OUR MARKET</h1>
            <Row>
              <Col md={8} className="text-start"></Col>
              <ListGroup>
              <h4 className="fw-bold m-0" text-color="#DEB887">GASE THRIFTING</h4>
              <p className="m-0">Established since 2021</p>
              <p className="m-0">Providing used clothes with good quality and affordable prices.</p>
              <p className="m-0">The clothes for sale are clean and smell good</p>
              <p className="m-0">Ready to use</p>
              <h4 className="m-0">Take Care of The Earth</h4>
              <h4 className="m-0">By Using Second Clothes</h4>
              </ListGroup>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}
