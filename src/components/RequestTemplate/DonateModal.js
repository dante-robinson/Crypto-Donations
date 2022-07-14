import React, { useState, useRef } from "react";
import OnClickOutside from "../OnClickOutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DonateModal = ({ setDonateModalOpen, Currency }) => {
  const ref = useRef();
  OnClickOutside(ref, () => setDonateModalOpen(false));

  return (
    <div className="bg-black overflow-hidden fixed bg-opacity-50 z-20 inset-0 flex justify-center items-center">
      <div
        ref={ref}
        className="bg-anti-flash-white w-[26rem] h-64 rounded-lg"
      >
        <h3 className="text-xl text-center mt-7">Donate to address</h3>
        <div className="flex justify-end mr-3 relative bottom-[3.25rem] text-2xl">
          <button
            className="text-2xl"
            onClick={() => setDonateModalOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Width large enough to fit 18 decimal places */} 
        <div className="flex justify-center">
          <input
            type="text"
            class="
              form-control
              block
              w-42
              mx-2
              py-1.5
              text-base
              font-normal
              text-gray-700 
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              text-center
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
            id="exampleFormControlInput1"
            placeholder="Enter Amount"
            onKeyPress={(event) => {
              if (!/[0-9 || .]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <h4 className="flex items-center">{Currency}</h4>
        </div>
      <div className="flex mt-8 justify-center">
        <button className="flex justify-center w-32 h-12 border-2 rounded-md bg-anti-flash-white hover:bg-darker-white">
          <h5 className="flex items-center">Confirm</h5>
        </button> 
      </div>
      </div>
    </div>
  );
};

export default DonateModal;
