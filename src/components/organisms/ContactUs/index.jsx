import React, { memo } from "react";
import "./ContactUs.scss";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const ContactUs = memo(() => (
  <section className="contact-us" role="complementary">
    <div data-aos="fade-up">
      <h2 className="contact-us__heading">Convinced to work with us?</h2>
      <h3 className="contact-us__subheading">
        Company has helped agencies keep their promises to clients since 2005.
      </h3>
    </div>
    <form className="contact-us__form">
      <Input
        placeholder="Full Name"
        className="contact-us__form__name"
        type="text"
        aria-label="full name"
        data-aos="zoom-in-right"
      />
      <Input
        placeholder="Email Address"
        className="contact-us__form__emailID"
        type="text"
        aria-label="email address"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
      />
      <Input
        placeholder="Phone Number"
        className="contact-us__form__mobile"
        type="text"
        aria-label="mobile number"
        data-aos="zoom-in-left"
      />
      <textarea
        placeholder="Message in brief"
        className="contact-us__form__messageInBrief input"
        rows="10"
        aria-label="message"
        data-aos="zoom-in-up"
      ></textarea>
      <Button className="contact-us__form__submit" data-aos="zoom-in">
        Submit
      </Button>
    </form>
  </section>
));

export default ContactUs;
