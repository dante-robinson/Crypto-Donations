import React from "react";
import Categories from "./NavigationBar/Categories";
import Login from "./NavigationBar/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <nav className="grid grid-cols-nav grid-rows-nav bg-crayola-blue">
      <FontAwesomeIcon
        className="text-greyish-white ml-6 col-start-1 self-center"
        icon={faMagnifyingGlass}
      />
      <Categories />
      <Login />
    </nav>
  );
};

export default NavigationBar;
