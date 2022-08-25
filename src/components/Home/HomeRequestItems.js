import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const [Response, setResponse] = useState(null);

  useEffect(() => {
    if (props.requestArray === []) return;
    const getResponse = async () => {
      let currentNumber = props.box;

      let response = await props.donation.methods
        .Requests(props.category, props.requestArray[currentNumber])
        .call();
      return response;
    };

    function getValues() {
      return getResponse().then((value) => {
        setResponse(value);
      });
    }

    getValues();
  }, [props.requestArray]);

  useEffect(() => {
    const getRequestData = async () => {
      if (Response === null) return;
      console.log(Response);
      let description = Response.description;
      setTitle(Response.title);
      setDescription(description.substring(0, 120));
      let amount = Response.amount / 1;
      setAmount(amount.toFixed(2).substring(0, 10));
    };

    getRequestData();
  }, [Response]);

  return (
    <Link href={`/categories/${props.category}/request/${props.requestId}`}>
      <a className="flex md:w-full md:space-y-[4vh] lg:w-64 2xl:w-72 lg:h-content border-4 border-bg-darker-white bg-light-anti-flash-white h-96 rounded-md">
        <div className="flex flex-col justify-between w-full h-full">
          <h4 className="flex w-full font-semibold text-xl justify-center pt-2">
            {Title}
          </h4>
          <p className="flex w-full text-center justify-center text-md">
            {Description}
          </p>
          <div className="flex justify-center items-end pb-2 w-full">
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
      </a>
    </Link >
  );
};

export default HomeRequestItems;
