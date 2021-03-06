import React, { memo } from "react";
import "./Testimonials.scss";
import FeedbackCard from "../../atoms/Card/FeedbackCard";
import ClientBox from "../../atoms/Testimonials/ClientBox";
import testimonials from "./feed";

const Testimonials = memo(() => (
  <section className={"testimonials"} role="complementary">
    <h2 className="testimonials__header" data-aos="fade-down">
      Testimonials
    </h2>
    <div className="testimonials__container">
      {testimonials.map(
        ({ aosConfig = {}, classValue, feedbackMessage, client }) => (
          <div className={classValue} key={client.name} {...aosConfig}>
            <FeedbackCard>{feedbackMessage}</FeedbackCard>
            <ClientBox clientName={client.name} details={client.details} />
          </div>
        )
      )}
    </div>
  </section>
));

export default Testimonials;
