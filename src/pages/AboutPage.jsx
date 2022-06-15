import React, { Component } from "react";
import { Card, Container, Col, Image, ListGroup, Row } from "react-bootstrap";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <div>
          <Card className="text-center">
            <Card.Header>About Our Market</Card.Header>
            <Card.Body>
              <Card.Title>GASE THRIFTING</Card.Title>
              <Image src="./images/Logo.png" width="300px" height="300px" />
              <Card.Text>
                Established since 2021. <br></br>
                Providing used clothes with good quality and affordable prices.{" "}
                <br></br>
                The clothes for sale are clean and smell good. Ready to use.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Take Care of The Earth. By Using Second Clothes
            </Card.Footer>
          </Card>
        </div>
        <br></br>
        <br></br>
        <h2 className="text-center">Our Team</h2>
        <br></br>
        <div className="text-center">
          <Container>
            <Row clasname="text-center">
              <Col>
                <div>
                  <img src="https://i.pinimg.com/564x/63/71/ab/6371ab425ce682a9b747c0558b73e07d.jpg" width="100" height="100"></img>
                  <h5>Sela Aulia Siswanto</h5>
                  <p>1941720196</p>
                  <p>TI-3C</p>
                </div>
              </Col>
              <Col>
                <div>
                <img src="https://i.pinimg.com/564x/60/6b/54/606b54355c972ad80d36fe86b188ec6e.jpg" width="100" height="100"></img>
                  <h5>Risky Dwi Ramadhan</h5>
                  <p>1941720234</p>
                  <p>TI-3C</p>
                </div>
              </Col>
              <Col>
                <div>
                <img src=" https://i.pinimg.com/564x/a4/58/c3/a458c3284f0bbfff3e277615773e27fa.jpg" width="100" height="100"></img>
                  <h5>Diva Ardhia Rahmania</h5>
                  <p>1941720184</p>
                  <p>TI-3C</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
