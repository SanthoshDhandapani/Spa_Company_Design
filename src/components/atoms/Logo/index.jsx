import React, { memo } from "react";
import "./Logo.scss";

const Logo = memo(() => (
  <a href="/" className="logo">
    Company <span>Logo</span>
  </a>
));
export default Logo;
