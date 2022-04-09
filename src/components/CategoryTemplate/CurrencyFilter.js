import React, { useRef } from "react";
import Image from "next/image";
import OnClickOutside from "../OnClickOutside";

const CurrencyFilter = (props) => {
  const CurrencyRef = useRef();
  OnClickOutside(CurrencyRef, () => props.setCurrencyModal(false));

  const selectCurrency = (ticker) => {
    props.setCurrency(ticker);
    props.setCurrencyModal(false);
  };

  return (
    <div
      ref={CurrencyRef}
      className="flex flex-col space-y-1 items-center overflow-y-scroll absolute w-28 h-96 rounded-md border-2 bg-anti-flash-white"
    >
      <ul className="flex flex-col ml-3 justify-center">
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ADA")}
          >
            <div className="mr-1">
              <Image
                src={props.Cardano}
                alt="Cardano Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Algorand}
                alt="Algorand Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Cosmos}
                alt="Cosmos Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Avalanche}
                alt="Avalanche Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.BSC}
                alt="Binance Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Bitcoin}
                alt="Bitcoin Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.BitcoinCash}
                alt="Bitcoin Cash Logo"
                width="16"
                height="16"
              />
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
              <Image src={props.Dash} alt="Dash Logo" width="16" height="16" />
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
              <Image
                src={props.Dogecoin}
                alt="Dogecoin Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Polkadot}
                alt="Polkadot Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Elrond}
                alt="Elrond Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.EthereumClassic}
                alt="Ethereum Classic Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Ethereum}
                alt="Ethereum Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Fantom}
                alt="Fantom Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Litecoin}
                alt="Litecoin Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Terra}
                alt="Terra Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Polygon}
                alt="Polygon Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Harmony}
                alt="Harmony Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Solana}
                alt="Solana Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Stellar}
                alt="Stellar Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Monero}
                alt="Monero Logo"
                width="16"
                height="16"
              />
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
              <Image
                src={props.Ripple}
                alt="Ripple Logo"
                width="16"
                height="16"
              />
            </div>
            XRP
          </button>
        </li>
        <li>
          <button
            className="flex hover:underline underline-offset-2"
            onClick={() => selectCurrency("ZEC")}
          >
            <div className="mr-1">
              <Image
                src={props.ZCash}
                alt="ZCash Logo"
                width="16"
                height="16"
              />
            </div>
            ZEC
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CurrencyFilter;
