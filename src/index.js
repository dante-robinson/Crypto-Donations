import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
