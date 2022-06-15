import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { ref, set } from "firebase/database";
import { Col, Container, Row } from "react-bootstrap";

const Feedback = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const navigate = useNavigate();

  const saveFeedback = () => {
    let uid = new Date().getTime().toString();
    console.log(uid);
    try {
      set(ref(db, `/contacts/${uid}`), { uid, nama, email, pesan });
    } catch (error) {
      console.log(error.message);
    }

    navigate("/contact");
  };

  return (
    <Container>
      <Row>
        <Col className="text-center" md={{ span: 4, offset: 4 }}>
          <h2 className="head"> Feedback </h2>
          <hr />
          <form onSubmit={saveFeedback}>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                id="nama"
                required
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pesan" className="form-label">
                Pesan
              </label>
              <textarea
                type="text"
                className="form-control"
                id="pesan"
                required
                placeholder="Pesan"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-dark btn-lg">Send</button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;
