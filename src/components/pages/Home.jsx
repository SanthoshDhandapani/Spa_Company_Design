import React from "react";
import Header from "../organisms/Header";
import Container from "../templates/Container";
import Banner from "../organisms/Banner";
import AboutUs from "../organisms/AboutUs";

const Home = () => (
  <Container>
    <Header />
    <Banner />
    <AboutUs />
  </Container>
);

export default Home;
