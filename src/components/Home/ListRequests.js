import React from "react";
import GridItems from "./HomeRequestItems";

const ListRequests = (props) => {
  const createBoxes = () => {
    let output = [];

    // change currentRequest to random numbers
    // category also needs randomized
    let currentRequest = 0;

    for (let box = 0; box < 4; box++) {
      currentRequest += 1;
      output.push(
        <GridItems
          key={box}
          box={box}
          conversionRate={1}
          currentPage={1}
          _currency={"BTC"}
          donation={props.donation}
          currentRequest={currentRequest}
          category={"animal"}
        />
      );
    }
    return output;
  };

  return (
    <div className="pt-8 flex flex-wrap justify-center">
      <h1 className="text-4xl font-semibold">Check out these Requests</h1>
      <div className="pt-6 pb-6 flex space-x-6">{createBoxes()}</div>
    </div>
  );
};

export default ListRequests;
