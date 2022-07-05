import React, { useRef } from "react";
import Image from "next/image";

const CurrencyFilter = (props) => {
  const selectCurrency = (ticker) => {
    props.setCurrency(ticker);
    props.setCurrencyModal(false);
  };

  return (
    <div
      ref={props.CurrencyRef}
      className="flex flex-col space-y-1 items-center absolute w-28 h-84 rounded-md border-2 bg-anti-flash-white"
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
