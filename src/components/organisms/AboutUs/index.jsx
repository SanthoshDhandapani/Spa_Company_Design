import React, { memo } from "react";
import AboutUsImg from "../../../assets/images/about-us.jpg";
import "./AboutUs.scss";

const AboutUs = memo(() => (
  <section className="about-us" role="contentinfo">
    <div>
      <h2 className="about-us__title" data-aos="fade-up-right">
        Mauris id bibendum est. Proin dapibus sollicitudin iaculis, Maecenas
        condimentum maximus laoreet.
      </h2>
      <p className="about-us__description" data-aos="fade-up">
        In maximus euismod egestas. Fusce tinicidunt posuere est non elementum.
        Vivamus tincidunt eleifend nisl et gravida. Aenean in lorem ultrices,
        pellentesque augue eu, mattis est. Praesent sed volutpat nibh. Morbi
        faucibus tortor sed neque vulputate hendrerit. Sed aliquam mattis purus
        eleifend consectetur. Nulla mollis non enim non tempus.
      </p>
    </div>
    <div
      className="about-us__image__container"
      data-aos="zoom-in-up"
      data-aos-duration="1200"
    >
      <img src={AboutUsImg} alt="aboutUsImage" className="about-us__image" />
    </div>
  </section>
));

export default AboutUs;
