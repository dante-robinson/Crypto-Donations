import React, { useState, useEffect } from "react";
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
    setAmount(response.amount);
    setScore(response.score);
  };

  useEffect(() => {
    getRequestData();
  }, []);

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
            <div className="flex">
              <p className="pr-1">{Amount}</p>
              <p className="pr-2">wei</p>
            </div>
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
            <div className="flex">
              <p className="pr-1">{Amount}</p>
              <p className="pr-2">wei</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
};

export default GridItems;
