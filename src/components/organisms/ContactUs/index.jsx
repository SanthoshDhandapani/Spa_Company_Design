import React, { memo } from "react";
import "./ContactUs.scss";
import ContactUsForm from "../../molecules/ContactUs/Form";

const ContactUs = memo(() => (
  <section className="contact-us" role="complementary">
    <h2 className="contact-us__heading" data-aos="fade-up">
      Convinced to work with us?
    </h2>
    <h3 className="contact-us__subheading" data-aos="fade-up">
      Company has helped agencies keep their promises to clients since 2005.
    </h3>
    <ContactUsForm />
  </section>
));

export default ContactUs;
