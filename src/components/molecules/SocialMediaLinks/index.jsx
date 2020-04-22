import React, { memo } from "react";
import "./SocialMedia.scss";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialMediaLinks = memo(() => (
  <div className="social-media__links">
    <span>Follow us on:</span>
    <a
      href="https://www.facebook.com"
      aria-label="Connect with us on our facebook page"
    >
      <FaFacebookSquare />
    </a>
    <a
      href="https://in.linkedin.com"
      aria-label="Connect with us on our linkedin profile"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://twitter.com"
      aria-label="Connect with us on our twitter page"
    >
      <FaTwitter />
    </a>
  </div>
));

export default SocialMediaLinks;
