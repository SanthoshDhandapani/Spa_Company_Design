import React from "react";
import Header from "../organisms/Header";
import Container from "../templates/Container";
import Banner from "../organisms/Banner";
import Testimonials from "../organisms/Testimonials";
import AboutUs from "../organisms/AboutUs";

const Home = () => (
  <Container>
    <Header />
    <Banner />
    <AboutUs />
    <Testimonials />
  </Container>
);

export default Home;
