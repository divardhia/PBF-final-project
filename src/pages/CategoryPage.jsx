import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CartPage = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCarts = () => {
      fetch("http://localhost:3002/carts")
        .then((res) => res.json())
        .then((json) => {
          setCarts(json);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getCarts();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>QTY</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {carts.length > 0 ? (
          carts.map((item, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>
                  <img
                    src={"/image/" + item.images[0].img}
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.total}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={5}>Data Empty</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CartPage;
