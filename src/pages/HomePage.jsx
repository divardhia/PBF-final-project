import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { Carousel, Card, Button } from "react-bootstrap";
import Feedback from "../component/Feedback";
import { AuthContext } from "..";

const HomePage = () => {
  const auth = useContext(AuthContext);
  if(auth.isLoggedIn === false) {
    return <Navigate to='/login'/>
  } else {
    return (
      <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thespruce.com/thmb/1dvNcTNl4LRTtFyuZWJeYzpXSng=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/wash-new-clothes-before-wearing-2146345-03-999483b3d51a435ba53c8d9ef5c2d5c4.jpg"
            alt="First slide"
            height="450px"
            left="50px"
            top="120px"
            border-radius="50px"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Market</h3>
            <p>Affordable places to shop vintage and secondhand clothing online</p>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/fa/5a/94/fa5a94179579000200683ca489e97f86.jpg"
            alt="Second slide"
            height="450px"
            width="1500px"
            left="50px"
            top="120px"
            border-radius="50px"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Market</h3>
            <p>Affordable places to shop vintage and secondhand clothing online</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/8f/62/25/8f6225db6f43ea6dffb5bbabda05421f.jpg"
            alt="Third slide"
            height="450px"
            width="1500px"
            left="50px"
            top="120px"
            border-radius="50px"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Market</h3>
            <p>Affordable places to shop vintage and secondhand clothing online</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Feedback />
      </>
      
    );
  }
   
    // return (
    //   <Card>
    //   <Card.Header>Product</Card.Header>
    //   <Card.Body>
    //     <Card.Title>Special title treatment</Card.Title>
    //     <Card.Text>
    //       With supporting text below as a natural lead-in to additional content.
    //     </Card.Text>
    //     <Button variant="primary">All Product</Button>
    //   </Card.Body>
    //   </Card>
    // );
  }

  export default HomePage;
