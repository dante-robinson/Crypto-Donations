import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex pt-6">
      <div className="relative w-full flex h-[5vh] bg-crayola-blue items-center justify-end">
        <a
          href="https://github.com/dante-robinson/Unstoppable-Donations"
          className="text-greyish-white"
        >
          Check out the project on Github
        </a>
        <div className="mr-2">
          <FontAwesomeIcon
            className="text-greyish-white ml-2"
            icon={faGithub}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
