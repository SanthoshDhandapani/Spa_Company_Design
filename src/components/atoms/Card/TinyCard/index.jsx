import React, { memo } from "react";
import "./TinyCard.scss";

const TinyCard = memo(({ image: { source, alt, ...rest }, title }) => (
  <div className="tiny-card">
    <img className="tiny-card__icon" src={source} alt={alt} {...rest} />
    <p className="tiny-card__title">{title}</p>
  </div>
));

export default TinyCard;
