import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaDev,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Bhankid"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://hashnode.com/@AlfredFianyo"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiHashnode />
      </a>

      <a
        href="https://dev.to/bhankid"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaDev />
      </a>

      <a
        href="https://www.linkedin.com/in/alfred-fianyo/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="facebook.com"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://x.com/Unruly_Bhankid?s=09"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
