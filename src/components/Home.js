import React from "react";
import Tips from "./Home/Tips";
import HowItWorks from "./Home/HowItWorks";

const Home = () => {
  return (
    <div className="space-y-8">
      <HowItWorks />
      <Tips />
    </div>
  );
};

export default Home;
