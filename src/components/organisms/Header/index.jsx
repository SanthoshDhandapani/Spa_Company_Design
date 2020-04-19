import React, { memo } from "react";
import "./Header.scss";
import NavMenu from "../../molecules/NavMenu";

const Header = memo(() => (
  <header className={"page-header"}>
    <NavMenu />
  </header>
));

export default Header;
