import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Card = ({ product, hapus }) => {
  const [show, setShow] = useState(false);
  const [productItem, setItem] = useState();

  return (
    <>
      <Row>
        {product.map((item) => {
          let thumbnail = item.gambar;
          let amount = item.stok;
          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <Col md={4} key={item.nama}>
                <div
                  className="card"
                  onClick={() => {
                    setShow(true);
                    setItem(item);
                  }}
                >
                  <Row>
                    <Col md={12}>
                      <img src={thumbnail} alt="" width={200} height={200} />
                    </Col>
                    <Col md={12}>
                      <div className="card-body text-start">
                        <h6 className="">{item.category}</h6>
                        <h3 className="">{item.nama}</h3>
                        <p className="amount">Jumlah : {amount}</p>
                        <Row>
                          <button
                            className="btn btn-warning btn-sm"
                            as={Link}
                            to={`/edit/product/${item.uid}`}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => hapus(item.uid)}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Modal
                  show={show}
                  item={productItem}
                  key={item.uid}
                  onClose={() => setShow(false)}
                />
              </Col>
            );
          }
        })}
      </Row>
    </>
  );
};

export default Card;
