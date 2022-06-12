import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ListProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      fetch(" http://localhost:3001/setrika")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();
  }, []);

  return (
    <Row>
      {products.length > 0 ? (
        products.map((item, key) => {
          return (
            <Col md={4} key={key}>
              <Card style={{ width: "100%" }}>
                <Card.Img style={{width: "100%", height: "300px"}} variant="top" src={'/image/' + item.images[0].img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description.substring(0,100)}</Card.Text>
                  <Button
                    onClick={() => navigate(`/product/${item.id}`)}
                    variant="primary"
                  >
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h1>Data not found</h1>
      )}
    </Row>
  );
};

export default ListProduct;
