import React, { memo } from "react";
import "./ClientBox.scss";
import ClientAvatar from "../../../../assets/images/client_avatar.png";

export const ClientBox = memo(({ clientName, details }) => {
  return (
    <div className="testimonials__client-box">
      <img src={ClientAvatar} alt="client-avatar" />
      <div className="testimonials__client-box__portfolio">
        <h2 className="testimonials__client-box__portfolio__name">
          {clientName}
        </h2>
        <span className="testimonials__client-box__portfolio__details">
          {details}
        </span>
      </div>
    </div>
  );
});

export default ClientBox;
