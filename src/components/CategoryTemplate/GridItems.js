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
import CurrencyIcon from "../CurrencyIcon";
import Link from "next/link";

const GridItems = (props) => {
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const [Amount, setAmount] = useState(null);
  const [Score, setScore] = useState(null);
  const [ID, setID] = useState(null);

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
    setID(response.id);
  };

  useEffect(() => {
    getRequestData();
  }, [props.conversionRate, props.currentPage]);

  const returnCurrency = (currency) => {
    return (
      <div className="flex">
        <p id="amount" className="pr-1 font-medium">
          {Amount}
        </p>
        <p id="currency" className="pr-1 font-semibold">
          {props._currency}
        </p>
        {
          <CurrencyIcon
            Bitcoin={props.Bitcoin}
            BitcoinCash={props.BitcoinCash}
            Cardano={props.Cardano}
            Dash={props.Dash}
            Dogecoin={props.Dogecoin}
            Ethereum={props.Ethereum}
            Litecoin={props.Litecoin}
            Monero={props.Monero}
            Polygon={props.Polygon}
            Ripple={props.Ripple}
            Stellar={props.Stellar}
            ZCash={props.ZCash}
            Currency={currency}
          />
        }
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
      <Link href={`/categories/${props.category}/request/${ID}`}>
        <a className="col-start-2 border-4 border-bg-darker-white bg-light-anti-flash-white w-full h-96 rounded-md">
          <div className="grid grid-rows-requestList w-full h-full">
            <h4 className="flex w-full font-semibold text-xl justify-center pt-2">
              {Title}
            </h4>
            <p className="row-start-3 flex w-full mx-2.5 justify-center text-md">
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
        </a>
      </Link>
    );
  } else {
    return (
      <Link href={`/categories/${props.category}/request/${ID}`}>
        <a className="flex w-content h-content border-4 border-bg-darker-white bg-light-anti-flash-white w-full h-96 rounded-md">
          <div className="grid grid-rows-requestList w-full h-full">
            <h4 className="flex w-full font-semibold text-xl justify-center pt-2">
              {Title}
            </h4>
            <p className="row-start-3 flex w-full mx-2.5 justify-center text-md">
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
        </a>
      </Link>
    );
  }
};

export default GridItems;
