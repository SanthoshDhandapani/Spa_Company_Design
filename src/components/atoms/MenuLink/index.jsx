import React, { memo } from "react";
import "./MenuLink.scss";

const MenuLink = memo(({ active, children, ...rest }) => (
  <a className={`menu-link${active ? " menu-link--active" : ""}`} {...rest}>
    {children}
  </a>
));

export default MenuLink;
