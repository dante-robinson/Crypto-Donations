import "../styles/index.css";
import Storage from "../src/artifacts/Storage.json";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import React, { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [Donation, setDonation] = useState(null);

  function getLibrary(provider, connector) {
    return new Web3(provider);
  }

  useEffect(() => {
    const web3 = new Web3(
      window.ethereum
        ? window.ethereum
        : "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.ALCHEMY_API
    );

    const StorageAddress = "0x50BdA764B2671af022aFDb3CA61C197902B9226d";
    setDonation(
      new web3.eth.Contract(Storage.abi, StorageAddress, {
        data: Storage.DeployedBytecode,
      })
    );
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} donation={Donation} />
    </Web3ReactProvider>
  );
};

export default MyApp;
