import React, { memo } from "react";
import "./Button.scss";

const Button = memo(({ icon: Icon, children, ...rest }) => (
  <button className={`button ${Icon ? "button__icon" : ""}`} {...rest}>
    {Icon && <Icon className="icon" />}
    {children}
  </button>
));

export default Button;
