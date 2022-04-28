import React from "react";
import ListRequests from "./Home/ListRequests";
import Notes from "./Home/Notes";
import Tips from "./Home/Tips";
import HowItWorks from "./Home/HowItWorks";

const Home = (props) => {
  return (
    <div className="px-96 h-content w-screen space-y-2">
      <ListRequests donation={props.donation} />
      <Notes />
      <HowItWorks />
      <Tips />
    </div>
  );
};

export default Home;
