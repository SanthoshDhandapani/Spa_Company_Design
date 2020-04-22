import React, { memo } from "react";
import "./Footer.scss";
import SocialMediaLinks from "../../molecules/SocialMediaLinks";

const presentYear = new Date().getFullYear();

const Footer = memo(() => (
  <div className="footer" role="complementary">
    <span>&copy;{` ${presentYear} Company. All Rights Reserved.`}</span>
    <SocialMediaLinks />
  </div>
));

export default Footer;
