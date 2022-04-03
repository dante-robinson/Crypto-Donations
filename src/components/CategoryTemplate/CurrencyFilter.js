import React from "react";
import Image from "next/image";
import Algorand from "../../../public/Algorand.png";
import Avalanche from "../../../public/Avalanche.png";
import Bitcoin from "../../../public/Bitcoin.png";
import BitcoinCash from "../../../public/BitcoinCash.png";
import BSC from "../../../public/BSC.png";
import Cardano from "../../../public/Cardano.png";
import Cosmos from "../../../public/Cosmos.png";
import Dash from "../../../public/Dash.png";
import Dogecoin from "../../../public/Dogecoin.png";
import Elrond from "../../../public/Elrond.png";
import Ethereum from "../../../public/Ethereum.png";
import EthereumClassic from "../../../public/EthereumClassic.png";
import Fantom from "../../../public/Fantom.png";
import Harmony from "../../../public/Harmony.png";
import Litecoin from "../../../public/Litecoin.png";
import Monero from "../../../public/Monero.png";
import Polkadot from "../../../public/Polkadot.png";
import Polygon from "../../../public/Polygon.png";
import Ripple from "../../../public/Ripple.png";
import Solana from "../../../public/Solana.png";
import Stellar from "../../../public/Stellar.png";
import Terra from "../../../public/Terra.png";
import ZCash from "../../../public/ZCash.png";

const CurrencyFilter = (props) => {
  const selectCurrency = (ticker) => {
    props.setCurrency(ticker);
    props.setCurrencyModal(false);
  };

  return (
    <div className="flex flex-col space-y-1 items-center overflow-y-scroll absolute w-28 h-96 rounded-md border-2 bg-anti-flash-white">
      <ul className="flex flex-col ml-3 justify-center">
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ADA")}
          >
            <div className="mr-1">
              <Image src={Cardano} width="16" height="16" />
            </div>
            ADA
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ALGO")}
          >
            <div className="mr-1">
              <Image src={Algorand} width="16" height="16" />
            </div>
            ALGO
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ATOM")}
          >
            <div className="mr-1">
              <Image src={Cosmos} width="16" height="16" />
            </div>
            ATOM
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("AVAX")}
          >
            <div className="mr-1">
              <Image src={Avalanche} width="16" height="16" />
            </div>
            AVAX
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("BNB")}
          >
            <div className="mr-1">
              <Image src={BSC} width="16" height="16" />
            </div>
            BNB
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("BTC")}
          >
            <div className="mr-1">
              <Image src={Bitcoin} width="16" height="16" />
            </div>
            BTC
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("BCH")}
          >
            <div className="mr-1">
              <Image src={BitcoinCash} width="16" height="16" />
            </div>
            BCH
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("DASH")}
          >
            <div className="mr-1">
              <Image src={Dash} width="16" height="16" />
            </div>
            DASH
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("DOGE")}
          >
            <div className="mr-1">
              <Image src={Dogecoin} width="16" height="16" />
            </div>
            DOGE
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("DOT")}
          >
            <div className="mr-1">
              <Image src={Polkadot} width="16" height="16" />
            </div>
            DOT
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("EGLD")}
          >
            <div className="mr-1">
              <Image src={Elrond} width="16" height="16" />
            </div>
            EGLD
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ETC")}
          >
            <div className="mr-1">
              <Image src={EthereumClassic} width="16" height="16" />
            </div>
            ETC
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ETH")}
          >
            <div className="mr-1">
              <Image src={Ethereum} width="16" height="16" />
            </div>
            ETH
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("FTM")}
          >
            <div className="mr-1">
              <Image src={Fantom} width="16" height="16" />
            </div>
            FTM
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("LTC")}
          >
            <div className="mr-1">
              <Image src={Litecoin} width="16" height="16" />
            </div>
            LTC
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("LUNA")}
          >
            <div className="mr-1">
              <Image src={Terra} width="16" height="16" />
            </div>
            LUNA
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("MATIC")}
          >
            <div className="mr-1">
              <Image src={Polygon} width="16" height="16" />
            </div>
            MATIC
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ONE")}
          >
            <div className="mr-1">
              <Image src={Harmony} width="16" height="16" />
            </div>
            ONE
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("SOL")}
          >
            <div className="mr-1">
              <Image src={Solana} width="16" height="16" />
            </div>
            SOL
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("XLM")}
          >
            <div className="mr-1">
              <Image src={Stellar} width="16" height="16" />
            </div>
            XLM
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("XMR")}
          >
            <div className="mr-1">
              <Image src={Monero} width="16" height="16" />
            </div>
            XMR
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("XRP")}
          >
            <div className="mr-1">
              <Image src={Ripple} width="16" height="16" />
            </div>
            XRP
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ZCASH")}
          >
            <div className="mr-1">
              <Image src={ZCash} width="16" height="16" />
            </div>
            ZCASH
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CurrencyFilter;
