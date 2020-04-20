import React, { memo } from "react";
import AboutUsImg from "../../../assets/images/about-us.jpg";
import "./AboutUs.scss";

const AboutUs = memo(() => (
  <section className="about-us">
    <div>
      <h2 className="about-us__title">
        Mauris id bibendum est. Proin dapibus sollicitudin iaculis, Maecenas
        condimentum maximus laoreet.
      </h2>
      <p className="about-us__description">
        In maximus euismod egestas. Fusce tinicidunt posuere est non elementum.
        Vivamus tincidunt eleifend nisl et gravida. Aenean in lorem ultrices,
        pellentesque augue eu, mattis est. Praesent sed volutpat nibh. Morbi
        faucibus tortor sed neque vulputate hendrerit. Sed aliquam mattis purus
        eleifend consectetur. Nulla mollis non enim non tempus.
      </p>
    </div>
    <div className="about-us__image">
      <img src={AboutUsImg} alt="aboutUsImage" />
    </div>
  </section>
));

export default AboutUs;
