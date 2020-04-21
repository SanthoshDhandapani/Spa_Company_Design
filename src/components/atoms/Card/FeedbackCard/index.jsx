import React, { memo } from "react";
import "./FeedbackCard.scss";
import { FaQuoteLeft } from "react-icons/fa";

const FeedbackCard = memo(({ children }) => (
  <div className="feedback-card">
    <p className="feedback-card__content">
      <FaQuoteLeft className="feedback-card__quote" />
      {children}
    </p>
  </div>
));

export default FeedbackCard;
