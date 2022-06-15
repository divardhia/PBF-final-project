import React, { useState, useContext } from "react";
import { AuthContext } from "../index";
import { auth_firebase } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");
  const navigate = useNavigate();

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    auth_firebase
      .signInWithEmailAndPassword(auth_firebase.getAuth(), email, password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
        setErrors(e.message);
      });
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    const provider = new auth_firebase.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    auth_firebase
      .signInWithPopup(auth_firebase.getAuth(), provider)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
        navigate("/");
      })
      .catch((e) => {
        setErrors(e.message);
      });
  };

  return (
    <Container>
      <Row >
        <Col className="text-center" md={{ span: 4, offset: 4 }}>
          <h1 className="text-center">LOGIN</h1>
          <form onSubmit={(e) => handleForm(e)}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="password"
            />
            <hr />
            <button
              className="googleBtn w-100"
              type="button"
              onClick={(e) => loginWithGoogle(e)}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="logo"
              />
              Login With Google
            </button>
            <button type="submit" className="w-100">Login</button>
            <span>{error}</span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
