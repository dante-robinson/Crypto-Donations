import "../styles/index.css";
import Storage from "../src/artifacts/Storage.json";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Bitcoin from "../public/Bitcoin.png";
import BitcoinCash from "../public/BitcoinCash.png";
import Cardano from "../public/Cardano.png";
import Dash from "../public/Dash.png";
import Dogecoin from "../public/Dogecoin.png";
import Ethereum from "../public/Ethereum.png";
import Litecoin from "../public/Litecoin.png";
import Monero from "../public/Monero.png";
import Polygon from "../public/Polygon.png";
import Ripple from "../public/Ripple.png";
import Stellar from "../public/Stellar.png";
import ZCash from "../public/ZCash.png";

const MyApp = ({ Component, pageProps }) => {
  const [Donation, setDonation] = useState(null);
  const [web3, setweb3] = useState(null);

  function getLibrary(provider, connector) {
    return new Web3(provider);
  }

  useEffect(() => {
    if (window.ethereum) {
      try {
        setweb3(new Web3(window.ethereum));
      } catch (error) {
        console.log("Ethereum Wallet Connector not found");
        console.log("Error: " + error);
      }
    } else {
      axios
        .get(`/api/alchemy`, {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((url) => setweb3(new Web3(url.data.url)));
    }
  }, []);

  useEffect(() => {
    if (web3 === null) return;

    const StorageAddress = "0x50BdA764B2671af022aFDb3CA61C197902B9226d";

    setDonation(
      new web3.eth.Contract(Storage.abi, StorageAddress, {
        data: Storage.DeployedBytecode,
      })
    );
  }, [web3]);

  const returnComponent = () => {
    if (Donation === null) return;
    return (
      <Component
        {...pageProps}
        Bitcoin={Bitcoin}
        BitcoinCash={BitcoinCash}
        Cardano={Cardano}
        Dash={Dash}
        Dogecoin={Dogecoin}
        Ethereum={Ethereum}
        Litecoin={Litecoin}
        Monero={Monero}
        Polygon={Polygon}
        Ripple={Ripple}
        Stellar={Stellar}
        ZCash={ZCash}
        donation={Donation}
      />
    );
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {returnComponent()}
    </Web3ReactProvider>
  );
};

export default MyApp;
