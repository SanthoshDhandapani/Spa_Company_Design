import React, { memo } from "react";
import "./ContactUs.scss";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const ContactUs = memo(() => (
  <section className="contact-us" role="complementary">
    <h2 className="contact-us__heading" data-aos="fade-up">
      Convinced to work with us?
    </h2>
    <h3 className="contact-us__subheading" data-aos="fade-up">
      Company has helped agencies keep their promises to clients since 2005.
    </h3>
    <form className="contact-us__form">
      <Input
        placeholder="Full Name"
        className="contact-us__form__name"
        type="text"
        aria-label="full name"
        data-aos="fade-up"
      />
      <Input
        placeholder="Email Address"
        className="contact-us__form__emailID"
        type="text"
        aria-label="email address"
        data-aos="fade-up"
      />
      <Input
        placeholder="Phone Number"
        className="contact-us__form__mobile"
        type="text"
        aria-label="mobile number"
        data-aos="fade-up"
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
