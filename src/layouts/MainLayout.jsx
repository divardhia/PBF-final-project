import React from 'react';
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const MainLayout = () => {
  return (
    <>
        <HeaderLayout/>
        <Container fluid="md" className="py-4" style={{ minHeight: "100vh"}} >
            <Outlet/>
        </Container>
        <FooterLayout/>
    </>
  )
}

export default MainLayout