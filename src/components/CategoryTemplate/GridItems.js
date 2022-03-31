import React, { useEffect } from "react";

const GridItems = (props) => {
  const getRequestData = async () => {
    let title = await props.donation.methods
      .Requests(props.category, BigInt(props.currentRequest))
      .call();
    console.log(title);
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
      <button className="col-start-2 border-4 border-bg-darker-white bg-light-anti-flash-white w-84 h-96 rounded-md">
        <h4></h4>
      </button>
    );
  } else {
    return (
      <div className="border-4 border-bg-darker-white bg-light-anti-flash-white w-84 h-96 rounded-md"></div>
    );
  }
};

export default GridItems;
