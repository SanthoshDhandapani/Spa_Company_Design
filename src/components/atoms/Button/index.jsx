import React, { memo } from "react";
import "./Button.scss";

const Button = memo(({ className, icon: Icon, children, ...rest }) => (
  <button
    {...rest}
    className={`${className ? `${className} ` : ""}button ${
      Icon ? "button__icon" : ""
    }`}
  >
    {Icon && <Icon className="icon" />}
    {children}
  </button>
));

export default Button;
