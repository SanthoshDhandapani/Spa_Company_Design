import React, { memo } from "react";
import "./Input.scss";

const Input = memo(({ className, children, ...rest }) => (
  <input {...rest} className={`${className ? `${className} ` : ""}input`}>
    {children}
  </input>
));

export default Input;
