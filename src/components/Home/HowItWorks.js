import React from "react";

const HowItWorks = () => {
  return (
    <div className="flex flex-wrap justify-center border-2 drop-shadow-sm rounded-md">
      <h1 className="text-4xl pt-8 pb-6 font-semibold justify-self-center">
        How It Works
      </h1>
      <ul className="space-y-2 pb-8 px-4 text-center justify-self-center">
        <li>
          <h3 className="pb-2 text-xl font-bold">Option A</h3>
        </li>
        <li>Create a Request (gas fee)</li>
        <li>Add an Organizer to recieve funds to (gas fee)</li>
        <li>
          Someone can then contribute to the request by using the provided
          address to make a manual transaction or contribute through the UI
          using the connected wallet
        </li>
        <li>
          <h3 className="pb-2 pt-2 text-xl font-bold">Option B</h3>
        </li>
        <li>Add a username to your connected Polygon address</li>
        <li>
          Add your other crypto addresses to your profile and share the profile
          link
        </li>
      </ul>
    </div>
  );
};

export default HowItWorks;
