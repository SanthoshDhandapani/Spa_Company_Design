import React, { memo } from "react";
import "./Banner.scss";
import ServiceCards from "../../molecules/ServiceCards";

const Banner = memo(() => (
  <section className="banner" role="complementary">
    <h1 className="banner__title">
      Integer bibendum sit amet
      <br />
      arcu vel egestas.
    </h1>
    <ServiceCards />
  </section>
));

export default Banner;
