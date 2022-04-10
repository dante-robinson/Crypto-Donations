import React, { useState, useRef } from "react";
import OnClickOutsideTwoRef from "./OnClickOutsideTwoRef";
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
  const [SearchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    alert("you have searched for - " + SearchInput);
  };

  const CategoryRef = useRef();
  const ButtonRef = useRef();

  OnClickOutsideTwoRef(CategoryRef, ButtonRef, () => setCategoriesOpen(false));

  const isOpen = () => {
    if (CategoriesOpen === false) {
      setCategoriesOpen(true);
    } else if (CategoriesOpen === true) {
      setCategoriesOpen(false);
    }
  };

  return (
    <nav className="flex h-[7vh] bg-crayola-blue">
      <div className="flex items-center">
        <FontAwesomeIcon
          className="text-greyish-white ml-6"
          icon={faMagnifyingGlass}
        />
        <div className="flex w-64 h-8 ml-2 bg-greyish-white rounded-2xl">
          <input
            type="search"
            placeholder="Search"
            onChange={(event) => setSearchInput(event.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
            className="flex ml-2 self-center bg-greyish-white border-none outline-none w-64 h-8 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex w-screen justify-between items-center">
        <div className="flex ml-2">
          <button
            ref={ButtonRef}
            onClick={() => isOpen()}
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
      {CategoriesOpen && <Categories CategoryRef={CategoryRef} />}

      {ChooseWalletOpen && (
        <ChooseWallet setChooseWalletOpen={setChooseWalletOpen} />
      )}
    </nav>
  );
};

export default NavigationBar;
