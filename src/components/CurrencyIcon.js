import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const CurrencyIcon = (props) => {
  const getIcon = () => {
    if (props.Currency === "ADA") {
      return (
        <div className="flex mr-1">
          <Image
            src={props.Cardano}
            alt="Cardano Logo"
            width="24"
            height="24"
          />
        </div>
      );
    } else if (props.Currency === "BTC") {
      return (
        <div className="flex mr-1">
          <Image
            src={props.Bitcoin}
            alt="Bitcoin Logo"
            width="24"
            height="24"
          />
        </div>
      );
    } else if (props.Currency === "BCH") {
      return (
        <div className="flex mr-1">
          <Image
            src={props.BitcoinCash}
            alt="Bitcoin Cash Logo"
            width="24"
            height="24"
          />
        </div>
      );
    } else if (props.Currency === "DASH") {
      return (
        <div className="flex mr-1">
          <Image src={props.Dash} alt="Dash Logo" width="24" height="16" />
        </div>
      );
    } else if (props.Currency === "DOGE") {
      return (
        <div className="flex mr-1">
          <Image
            src={props.Dogecoin}
            alt="Dogecoin Logo"
            width="24"
            height="24"
          />
        </div>
      );
    } else if (props.Currency === "ETH") {
      return (
        <div className="flex mr-1">
          <Image
            src={props.Ethereum}
            alt="Ethereum Logo"
            width="24"
            height="24"
          />
        </div>
      );
    } else if (props.Currency === "LTC") {
      return (
        <div className="flex mr-1">
          <Image
            src={props.Litecoin}
            alt="Litecoin Logo"
            width="24"
            height="24"
          />
        </div>
      );
    } else if (props.Currency === "MATIC") {
      return (
        <div className="flex mr-1">
          <Image
            src={props.Polygon}
            alt="Polygon Logo"
            width="24"
            height="24"
          />
        </div>
      );
    } else if (props.Currency === "XLM") {
      return (
        <div className="flex mr-1">
          <Image
            src={props.Stellar}
            alt="Stellar Logo"
            width="24"
            height="24"
          />
        </div>
      );
    } else if (props.Currency === "XMR") {
      return (
        <div className="flex mr-1">
          <Image src={props.Monero} alt="Monero Logo" width="24" height="16" />
        </div>
      );
    } else if (props.Currency === "XRP") {
      return (
        <div className="flex mr-1">
          <Image src={props.Ripple} alt="Ripple Logo" width="24" height="16" />
        </div>
      );
    } else if (props.Currency === "ZEC") {
      return (
        <div className="flex mr-1">
          <Image src={props.ZCash} alt="ZCash Logo" width="24" height="16" />
        </div>
      );
    }
  };
  return <div>{getIcon()}</div>;
};

export default CurrencyIcon;
