import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex mt-8 h-[5vh] bg-crayola-blue items-center justify-end">
      <a
        href="https://github.com/dante-robinson/Unstoppable-Donations"
        className="text-greyish-white"
      >
        Check out the project on Github
      </a>
      <FontAwesomeIcon className="text-greyish-white ml-2" icon={faGithub} />
    </div>
  );
};

export default Footer;
