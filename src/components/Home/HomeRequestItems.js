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
import Bitcoin from "../../../public/Bitcoin.png";

const HomeRequestItems = (props) => {
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
  }, []);

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
          <div className="flex">
            <p id="amount" className="pr-1 font-medium">
              {Amount}
            </p>
            <p id="currency" className="pr-1 font-semibold">
              {props._currency}
            </p>
            <div className="flex mr-1">
              <Image src={Bitcoin} alt="Bitcoin Logo" width="24" height="16" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default HomeRequestItems;
