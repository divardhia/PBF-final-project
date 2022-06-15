import React from 'react';
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const MainLayout = () => {
  return (
    <>
        <HeaderLayout/>
        <Container className="py-2" style={{ minHeight: "10vh"}}>
            <Outlet/>
        </Container>
        <FooterLayout/>
    </>
  )
}

export default MainLayout