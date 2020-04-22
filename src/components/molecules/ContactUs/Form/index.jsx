import React, { memo } from "react";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import "./Form.scss";

const ContactUsForm = memo(() => (
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
    <Button
      className="contact-us__form__submit"
      data-aos="zoom-in"
      data-aos-once="true"
    >
      Submit
    </Button>
  </form>
));

export default ContactUsForm;
