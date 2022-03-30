import React from "react";

const GridItems = (props) => {
  if (
    props.box === 0 ||
    props.box === 3 ||
    props.box === 6 ||
    props.box === 9 ||
    props.box === 12
  ) {
    return (
      <button className="col-start-2 border-4 border-bg-darker-white bg-light-anti-flash-white w-84 h-96 rounded-md"></button>
    );
  } else {
    return (
      <div className="border-4 border-bg-darker-white bg-light-anti-flash-white w-84 h-96 rounded-md"></div>
    );
  }
};

export default GridItems;
