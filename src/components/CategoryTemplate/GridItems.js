import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareCaretDown as Downvote,
  faSquareCaretUp as Upvote,
} from "@fortawesome/free-regular-svg-icons";

const GridItems = (props) => {
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const [Amount, setAmount] = useState(null);
  const [Score, setScore] = useState(null);

  const getRequestData = async () => {
    let response = await props.donation.methods
      .Requests(props.category, BigInt(props.currentRequest))
      .call();
    let description = response.description;
    setTitle(response.title);
    setDescription(description.substring(0, 180));
    let amount = response.amount / props.conversionRate;
    setAmount(amount.toFixed(2).substring(0, 10));
    setScore(response.score);
  };

  useEffect(() => {
    getRequestData();
  }, [props.conversionRate]);

  const returnCurrency = (currency) => {
    const getImage = () => {
      if (currency === "ADA") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Cardano}
              alt="Cardano Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "ALGO") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Algorand}
              alt="Algorand Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "ATOM") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Cosmos}
              alt="Cosmos Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "AVAX") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Avalanche}
              alt="Avalanche Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "BNB") {
        return (
          <div className="flex mr-1">
            <Image src={props.BSC} alt="Binance Logo" width="24" height="16" />
          </div>
        );
      } else if (currency === "BTC") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Bitcoin}
              alt="Bitcoin Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "BCH") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.BitcoinCash}
              alt="Bitcoin Cash Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "DASH") {
        return (
          <div className="flex mr-1">
            <Image src={props.Dash} alt="Dash Logo" width="24" height="16" />
          </div>
        );
      } else if (currency === "DOGE") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Dogecoin}
              alt="Dogecoin Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "DOT") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Polkadot}
              alt="Polkadot Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "EGLD") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Elrond}
              alt="Elrond Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "ETC") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.EthereumClassic}
              alt="Ethereum Classic Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "ETH") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Ethereum}
              alt="Ethereum Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "FTM") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Fantom}
              alt="Fantom Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "LTC") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Litecoin}
              alt="Litecoin Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "LUNA") {
        return (
          <div className="flex mr-1">
            <Image src={props.Terra} alt="Terra Logo" width="24" height="16" />
          </div>
        );
      } else if (currency === "MATIC") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Polygon}
              alt="Polygon Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "ONE") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Harmony}
              alt="Harmony Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "SOL") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Solana}
              alt="Solana Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "XLM") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Stellar}
              alt="Stellar Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "XMR") {
        return (
          <div className="flex mr-1">
            <Image src={Monero} alt="Monero Logo" width="24" height="16" />
          </div>
        );
      } else if (currency === "XRP") {
        return (
          <div className="flex mr-1">
            <Image
              src={props.Ripple}
              alt="Ripple Logo"
              width="24"
              height="16"
            />
          </div>
        );
      } else if (currency === "ZEC") {
        return (
          <div className="flex mr-1">
            <Image src={props.ZCash} alt="ZCash Logo" width="24" height="16" />
          </div>
        );
      }
    };

    return (
      <div className="flex">
        <p id="amount" className="pr-1 font-medium">
          {Amount}
        </p>
        <p id="currency" className="pr-1 font-semibold">
          {props._currency}
        </p>
        {getImage()}
      </div>
    );
  };

  if (
    props.box === 0 ||
    props.box === 3 ||
    props.box === 6 ||
    props.box === 9 ||
    props.box === 12
  ) {
    return (
      <button className="col-start-2 border-4 border-bg-darker-white bg-light-anti-flash-white w-full h-96 rounded-md">
        <div className="grid grid-rows-requestList w-full h-full">
          <h4 className="flex w-full font-semibold text-xl justify-center pt-2">
            {Title}
          </h4>
          <p className="row-start-3 flex w-full justify-center text-md">
            {Description}
          </p>
          <div className="row-start-4 flex justify-between items-end pb-2 w-full">
            <div className="flex">
              <FontAwesomeIcon className="text-2xl pl-2" icon={Upvote} />
              <p className="pl-2 pr-2">{Score}</p>
              <FontAwesomeIcon className=" text-2xl" icon={Downvote} />
            </div>
            {returnCurrency(props._currency)}
          </div>
        </div>
      </button>
    );
  } else {
    return (
      <button className="flex w-content h-content border-4 border-bg-darker-white bg-light-anti-flash-white w-full h-96 rounded-md">
        <div className="grid grid-rows-requestList w-full h-full">
          <h4 className="flex w-full font-semibold text-xl justify-center pt-2">
            {Title}
          </h4>
          <p className="row-start-3 flex w-full justify-center text-md">
            {Description}
          </p>
          <div className="row-start-4 flex justify-between items-end pb-2 w-full">
            <div className="flex">
              <FontAwesomeIcon className="text-2xl pl-2" icon={Upvote} />
              <p className="pl-2 pr-2">{Score}</p>
              <FontAwesomeIcon className=" text-2xl" icon={Downvote} />
            </div>
            {returnCurrency(props._currency)}
          </div>
        </div>
      </button>
    );
  }
};

export default GridItems;
