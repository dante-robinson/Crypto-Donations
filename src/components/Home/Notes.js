import React from "react";

const Notes = () => {
  return (
    <div className="flex flex-wrap justify-center pb-6">
      <p className="text-center">
        The changing currencies API allows 1 conversion per second, only use if
        needed
      </p>
      <p className="text-center">
        Login to Polygon account if possible to save API calls for users without
        accounts
      </p>
    </div>
  );
};

export default Notes;
