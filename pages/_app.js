import "../styles/index.css";
import NavigationBar from "../src/components/NavigationBar";
import Home from "../src/components/Home";
import Web3 from "web3";
import Donation from "../src/artifacts/Storage.json";
import { Web3ReactProvider } from "@web3-react/core";
import React, { useEffect } from "react";

const MyApp = () => {
  function getLibrary(provider, connector) {
    return new Web3(provider);
  }

  useEffect(() => {
    const web3 = new Web3(
      window.ethereum
        ? window.ethereum
        : "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.ALCHEMY_API
    );

    const DonationAddress = "0x50BdA764B2671af022aFDb3CA61C197902B9226d";
    const donation = new web3.eth.Contract(Donation.abi, DonationAddress, {
      data: Donation.DeployedBytecode,
    });
  }, []);

  return (
    <div>
      <Web3ReactProvider getLibrary={getLibrary}>
        <NavigationBar />
        <Home />
      </Web3ReactProvider>
    </div>
  );
};

export default MyApp;
