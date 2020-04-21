import React, { memo } from "react";
import "./SocialMedia.scss";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialMediaLinks = memo(() => (
  <div className="social-media__links">
    <span>Follow us on:</span>
    <a href="https://www.facebook.com">
      <FaFacebookSquare />
    </a>
    <a href="https://in.linkedin.com">
      <FaLinkedin />
    </a>
    <a href="https://twitter.com">
      <FaTwitter />
    </a>
  </div>
));

export default SocialMediaLinks;
