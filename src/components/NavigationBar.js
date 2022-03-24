import React, { useState } from "react";
import Categories from "./NavigationBar/Categories";
import ChooseWallet from "./NavigationBar/ChooseWallet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="grid grid-cols-nav grid-rows-nav bg-crayola-blue">
      <FontAwesomeIcon
        className="text-greyish-white ml-6 col-start-1 self-center"
        icon={faMagnifyingGlass}
      />
      <Categories />
      <button
        onClick={() => setIsOpen(true)}
        className="col-start-3 self-center justify-self-end mr-4 text-greyish-white border-2 w-24 h-10 hover:bg-darker-blue rounded-md text-center"
      >
        Login
      </button>
      {isOpen && <ChooseWallet setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default NavigationBar;
