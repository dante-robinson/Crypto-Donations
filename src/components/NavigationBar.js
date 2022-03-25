import React, { useState } from "react";
import Categories from "./NavigationBar/Categories";
import ChooseWallet from "./NavigationBar/ChooseWallet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = (props) => {
  const [ChooseWalletOpen, setChooseWalletOpen] = useState(false);
  const [CategoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="flex h-[7vh] bg-crayola-blue">
      <div className="flex items-center">
        <FontAwesomeIcon
          className="text-greyish-white ml-6"
          icon={faMagnifyingGlass}
        />
      </div>
      <div className="flex w-screen justify-between items-center">
        <div className="flex ml-4 ">
          <button
            onClick={() => setCategoriesOpen(true)}
            className="text-greyish-white w-28 h-10 rounded-md"
          >
            Categories
            <FontAwesomeIcon
              className="text-greyish-white ml-2"
              icon={faAngleDown}
            />
          </button>
        </div>
        <div className="flex mr-4 justify-end">
          <button
            onClick={() => setChooseWalletOpen(true)}
            className="text-greyish-white border-2 w-24 h-10 hover:bg-darker-blue rounded-md text-center"
          >
            Login
          </button>
        </div>
      </div>
      {CategoriesOpen && <Categories setCategoriesOpen={setCategoriesOpen} />}
      {ChooseWalletOpen && (
        <ChooseWallet setChooseWalletOpen={setChooseWalletOpen} />
      )}
    </nav>
  );
};

export default NavigationBar;
