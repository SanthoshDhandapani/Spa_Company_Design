import React, { memo } from "react";
import "./ContactUs.scss";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const ContactUs = memo(() => (
  <section className="contact-us">
    <h2 className="contact-us__heading">Convinced to work with us?</h2>
    <h3 className="contact-us__subheading">
      Company has helped agencies keep their promises to clients since 2005.
    </h3>
    <form className="contact-us__form">
      <Input
        placeholder="Full Name"
        className="contact-us__form__name"
        type="text"
      />
      <Input
        placeholder="Email Address"
        className="contact-us__form__emailID"
        type="text"
      />
      <Input
        placeholder="Phone Number"
        className="contact-us__form__mobile"
        type="text"
      />
      <textarea
        placeholder="Message in brief"
        className="contact-us__form__messageInBrief input"
        rows="10"
      ></textarea>
      <Button className="contact-us__form__submit">Submit</Button>
    </form>
  </section>
));

export default ContactUs;