import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [products, setProducts] = useState({});
  const [image, setImage] = useState("");
  const [qty, setQty] = useState(1);

  const getProductDetail = () => {
    fetch(`http://localhost:3001/setrika/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setImage(json.images[0].img);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  // FUNCTION ADD CART
  const addCart = () => {
    let timestamp = new Date().getTime();
    let price = products.price.split(".");
    let newPrice = "";
    price.forEach((element) => {
      newPrice += element;
    });
    const payload = {
      ...products,
      id: timestamp,
      qty: qty,
      total: parseInt(qty) * newPrice,
    };
    fetch("http://localhost:3002/carts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      navigate("/cart");
    });
  };

  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={"/image/" + image} />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>{products.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Type: {products.type}</ListGroupItem>
        <ListGroupItem>Harga: {products.price}</ListGroupItem>
        <ListGroupItem>Stock: {products.stock}</ListGroupItem>
        <ListGroupItem>Aksesoris: {products.aksesoris}</ListGroupItem>
        <ListGroupItem>Lapisan Alas: {products.lapisan_alas}</ListGroupItem>
        <ListGroupItem>Size: {products.size}</ListGroupItem>
        <ListGroupItem>Daya: {products.daya}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Form.Control
          type="number"
          placeholder="Qty"
          defaultValue={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <Button onClick={addCart}>Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetailPage;
