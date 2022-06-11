import React, { useState, useEffect, useRef } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareCaretDown as Downvote,
  faSquareCaretUp as Upvote,
} from "@fortawesome/free-regular-svg-icons";
import OnClickOutsideTwoRef from "./OnClickOutsideTwoRef";
import CurrencyFilter from "./CurrencyFilter";
import axios from "axios";
import getConfig from "next/config";

const RequestTemplate = (props) => {
  const [CurrencyModal, setCurrencyModal] = useState(false);
  const [Currency, setCurrency] = useState("BTC");
  // Default 1 : 1 ratio for BTC
  const [ConversionRate, setConversionRate] = useState(1);

  const CurrencyRef = useRef();
  const CurrencyButtonRef = useRef();
  OnClickOutsideTwoRef(CurrencyRef, CurrencyButtonRef, () =>
    setCurrencyModal(false)
  );

  useEffect(() => {
    const changeCurrency = async (currency) => {
      if (currency !== "BTC") {
        axios
          .get(`/api/nomics?currency=${currency}`, {
            headers: {
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((response) => setConversionRate(response.data.price));
      } else {
        setConversionRate(1);
      }
    };

    changeCurrency(Currency);
  }, [Currency]);

  const createCurrencyFilterButton = () => {
    return (
      <div className="col-start-3 row-start-3 flex justify-self-end py-36 px-4 h-12 gap-6">
        <button
          ref={CurrencyButtonRef}
          onClick={
            CurrencyModal === false
              ? () => setCurrencyModal(true)
              : () => setCurrencyModal(false)
          }
          className="w-28 h-8 rounded-md border-2 bg-anti-flash-white"
        >
          <FontAwesomeIcon className="mr-2" icon={faAngleDown} />
          {Currency}
        </button>
        {CurrencyModal && (
          <CurrencyFilter
            CurrencyRef={CurrencyRef}
            setCurrency={setCurrency}
            setCurrencyModal={setCurrencyModal}
            Algorand={props.Algorand}
            Avalanche={props.Avalanche}
            Bitcoin={props.Bitcoin}
            BitcoinCash={props.BitcoinCash}
            BSC={props.BSC}
            Cardano={props.Cardano}
            Cosmos={props.Cosmos}
            Dash={props.Dash}
            Dogecoin={props.Dogecoin}
            Elrond={props.Elrond}
            Ethereum={props.Ethereum}
            EthereumClassic={props.EthereumClassic}
            Fantom={props.Fantom}
            Harmony={props.Harmony}
            Litecoin={props.Litecoin}
            Monero={props.Monero}
            Polkadot={props.Polkadot}
            Polygon={props.Polygon}
            Ripple={props.Ripple}
            Solana={props.Solana}
            Stellar={props.Stellar}
            Terra={props.Terra}
            ZCash={props.ZCash}
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex flex-wrap">
        <div className="grid grid-cols-3 grid-rows-requestTemplate w-screen mx-[20vw]">
          <h2 className="text-2xl font-bold self-end pb-2">Title</h2>
          <div className="col-start-3 flex self-end justify-self-end">
            <FontAwesomeIcon className="text-2xl pb-2" icon={Upvote} />
            <p className="px-2">0</p>
            <FontAwesomeIcon className="text-2xl pr-5" icon={Downvote} />
          </div>

          <div className="col-start-1 row-start-2 h-96 w-[45rem] border-2 border-greyish-white"></div>

          <div className="flex flex-wrap justify-center col-start-3 row-start-2 h-[32rem] w-[22rem] border-2 border-darker-white rounded-md">
            <h2 className="text-lg font-semibold py-1">Recent Contributors</h2>
            <ul className="flex flex-col">
              <li className="flex my-2">
                <div className="border h-12 w-12 rounded-md"></div>
                <div classname="flex self-center">
                  <h4 className="text-xs px-3 py-1">Address</h4>
                  <p className="flex px-3 py-1 text-xs">1 BTC</p>
                </div>
              </li>
              <hr className="row-start-5 bg-greyish-white w-80 h-0.5 rounded-sm"></hr>
              <li className="flex my-3">
                <div className="border h-12 w-12 rounded-md"></div>
                <div classname="flex self-center">
                  <h4 className="text-xs px-3 py-1">Address</h4>
                  <p className="flex px-3 py-1 text-xs">1 BTC</p>
                </div>
              </li>
              <hr className="row-start-5 bg-greyish-white w-80 h-0.5 rounded-sm"></hr>
              <li className="flex my-3">
                <div className="border h-12 w-12 rounded-md"></div>
                <div classname="flex self-center">
                  <h4 className="text-xs px-3 py-1">Address</h4>
                  <p className="flex px-3 py-1 text-xs">1 BTC</p>
                </div>
              </li>
              <hr className="row-start-5 bg-greyish-white w-80 h-0.5 rounded-sm"></hr>
              <li className="flex my-3">
                <div className="border h-12 w-12 rounded-md"></div>
                <div classname="flex self-center">
                  <h4 className="text-xs px-3 py-1">Address</h4>
                  <p className="flex px-3 py-1 text-xs">1 BTC</p>
                </div>
              </li>
              <hr className="row-start-5 bg-greyish-white w-80 h-0.5 rounded-sm"></hr>
              <li className="flex my-3">
                <div className="border h-12 w-12 rounded-md"></div>
                <div classname="flex self-center">
                  <h4 className="text-xs px-3 py-1">Address</h4>
                  <p className="flex px-3 py-1 text-xs">1 BTC</p>
                </div>
              </li>
              <hr className="row-start-5 bg-greyish-white w-80 h-0.5 rounded-sm"></hr>
              <li className="flex my-3">
                <div className="border h-12 w-12 rounded-md"></div>
                <div classname="flex self-center">
                  <h4 className="text-xs px-3 py-1">Address</h4>
                  <p className="flex px-3 py-1 text-xs">1 BTC</p>
                </div>
              </li>
            </ul>
            <p className="text-xs text-center self-end py-1">
              Note: Contributors are only those who have donated using the
              Ethereum Network and made the donation through this website
            </p>
          </div>
          {createCurrencyFilterButton()}

          <div className="row-start-3 col-span-2 py-3 w-[45rem] px-1">
            <p className="text-sm">Description</p>
          </div>
          <hr className="row-start-4 col-start-1 bg-greyish-white w-[45rem] h-0.5 rounded-sm"></hr>

          <h3 className="flex col-start-2 row-start-4 text-lg font-semibold justify-self-center py-3">
            Organizers
          </h3>
          <div className="col-start-1 col-span-3 row-start-4 flex flex-row pt-7">
            <ul className="flex flex-row flex-wrap self-center">
              <li className="flex w-[22.7rem]">
                <div className="border h-14 w-14 rounded-md ml-2"></div>
                <div className="flex flex-col w-[18.7rem]">
                  <div>
                    <h4 className="text-xs px-3 pb-1">Address</h4>
                    <p className="flex text-xs font-semibold px-3 pb-1">Role</p>
                    <p className="flex text-xs px-3">Currency</p>
                    <div className="pt-3 flex justify-center">
                      <button className="flex justify-center text-xs h-12 w-36 text-center rounded-md border-2 border-black ml-2">
                        <p className="self-center">Donate to this Address</p>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex w-[22.7rem]">
                <div className="border h-14 w-14 rounded-md ml-2"></div>
                <div className="flex flex-col w-[18.7rem]">
                  <div>
                    <h4 className="text-xs px-3 pb-1">Address</h4>
                    <p className="flex text-xs font-semibold px-3 pb-1">Role</p>
                    <p className="flex text-xs px-3">Currency</p>
                  </div>
                  <div className="pt-3 flex justify-center">
                    <button className="flex justify-center text-xs h-12 w-36 text-center rounded-md border-2 border-black ml-2">
                      <p className="self-center">Donate to this Address</p>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex w-[22.7rem]">
                <div className="border h-14 w-14 rounded-md ml-2"></div>
                <div className="flex flex-col w-[18.7rem]">
                  <div>
                    <h4 className="text-xs px-3 pb-1">Address</h4>
                    <p className="flex text-xs font-semibold px-3 pb-1">Role</p>
                    <p className="flex text-xs px-3">Currency</p>
                    <div className="pt-3 flex justify-center">
                      <button className="flex justify-center text-xs h-12 w-36 text-center rounded-md border-2 border-black ml-2">
                        <p className="self-center">Donate to this Address</p>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <hr className="row-start-5 col-start-1 bg-greyish-white w-[69rem] h-0.5 rounded-sm"></hr>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 px-[20vw] w-screen">
          <div className="">
            <div className="flex justify-center">
              <h4 className="col-start-1 justify-self-center text-lg font-semibold justify-self-center py-3">
                All Contributors
              </h4>
            </div>
            <div className="col-start-2">
              <ul>
                <li className="flex my-3 mx-8">
                  <div className="border h-12 w-12 rounded-md"></div>
                  <div classname="flex self-center">
                    <h5 className="text-xs px-3 py-1">Address</h5>
                    <p className="flex px-3 py-1 text-xs">1 BTC</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <h4 className="col-start-2 justify-self-center text-lg font-semibold justify-self-center py-3">
                Posts
              </h4>
            </div>
            <div className="col-start-2">
              <ul>
                <li className="flex my-3 mx-8">
                  <div className="border h-12 w-12 rounded-md"></div>
                  <div classname="flex self-center">
                    <h5 className="text-xs px-3 py-1">Address</h5>
                    <p className="flex text-xs font-semibold px-3 pb-3">Role</p>
                    <p className="flex text-xs px-3">Post Text</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RequestTemplate;
