import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class HomePage extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/10/07/322465677.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Market</h3>
            <p>get ease life with us</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s4.bukalapak.com/bukalapak-kontenz-production/content_attachments/28769/w-1480/shutterstock_644074321_1_.jpg.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.popmama.com/content-images/post/20181204/img-04122018-124548-800-x-420-pixel-5bb66b52269d415be62f21b11fc13608.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
