import React from "react";
import { Col, Row } from "react-bootstrap";

const FooterLayout = () => {
  return (
    <>
      <Row className="bg-dark text-light m-0">
        <Col className="text-center py-2">
          <a
            class="btn-floating m-1"
            href="https://instagram.com/selaaulia_"
            role="button"
          >
            <img src="/image/instagram.png" width="25" height="25"/>
          </a>
          <a
            class="btn-floating m-1"
            href="https://web.whatsapp.com/"
            role="button"
          >
            <img src="/image/whatsapp.png" width="20" height="20"/>
          </a>
          <div>© 2022 Copyright: Gase Thrifting</div>
        </Col>
      </Row>
    </>
  );
};

export default FooterLayout;
