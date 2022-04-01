import React from "react";
import Tips from "./Home/Tips";
import HowItWorks from "./Home/HowItWorks";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-screen space-y-8">
      <HowItWorks />
      <Tips />
      <Footer />
    </div>
  );
};

export default Home;
