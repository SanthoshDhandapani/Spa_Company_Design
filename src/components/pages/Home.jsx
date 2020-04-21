import React from "react";
import Header from "../organisms/Header";
import Container from "../templates/Container";
import Banner from "../organisms/Banner";
import Testimonials from "../organisms/Testimonials";
import AboutUs from "../organisms/AboutUs";
import ContactUs from "../organisms/ContactUs";
import Footer from "../organisms/Footer";

const Home = () => (
  <Container>
    <Header />
    <Banner />
    <AboutUs />
    <Testimonials />
    <ContactUs />
    <Footer />
  </Container>
);

export default Home;
