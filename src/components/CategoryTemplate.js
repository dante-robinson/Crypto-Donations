import React, { useState, useEffect, useRef } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import GridItems from "./CategoryTemplate/GridItems";
import CurrencyFilter from "./CurrencyFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import OnClickOutsideTwoRef from "./OnClickOutsideTwoRef";
import axios from "axios";
import getConfig from "next/config";
import Link from "next/link";

const CategoryTemplate = (props) => {
  const [TotalRequests, setTotalRequests] = useState(null);
  const [Pages, setPages] = useState(null);
  const [PageRequests, setPageRequests] = useState(null);
  const [LastPage, setLastPage] = useState(null);
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
    if (TotalRequests == null) return;

    const getPages = () => {
      setPages(Math.ceil(TotalRequests / 15));
    };

    getPages();
  }, [TotalRequests]);

  useEffect(() => {
    if (Pages == null) return;

    const isLastPage = () => {
      if (Pages == props.currentPage) {
        setPageRequests(TotalRequests % 15);
        setLastPage(true);
      } else {
        setLastPage(false);
      }
    };

    isLastPage();
  }, [Pages, props.currentPage]);

  useEffect(() => {
    if (LastPage == null && props.currentPage == null) return;

    const getPageRequests = () => {
      if (LastPage == false) {
        setPageRequests(15);
      }
    };

    getPageRequests();
  }, [LastPage]);

  useEffect(() => {
    if (!props.donation) return;

    const getTotalRequests = async () => {
      let result;
      if (props.category === "animal") {
        result = await props.donation.methods.animalRequests().call();
      } else if (props.category === "Business") {
        result = await props.donation.methods.businessRequests().call();
      } else if (props.category === "Community") {
        result = await props.donation.methods.communityRequests().call();
      } else if (props.category === "Competition") {
        result = await props.donation.methods.competitionRequests().call();
      } else if (props.category === "Creative") {
        result = await props.donation.methods.creativeRequests().call();
      } else if (props.category === "Education") {
        result = await props.donation.methods.educationRequests().call();
      } else if (props.category === "Emergency") {
        result = await props.donation.methods.emergencyRequests().call();
      } else if (props.category === "Environment") {
        result = await props.donation.methods.environmentRequests().call();
      } else if (props.category === "Event") {
        result = await props.donation.methods.eventRequests().call();
      } else if (props.category === "Family") {
        result = await props.donation.methods.familyRequests().call();
      } else if (props.category === "Individual") {
        result = await props.donation.methods.individualRequests().call();
      } else if (props.category === "Medical") {
        result = await props.donation.methods.medicalRequests().call();
      } else if (props.category === "Memorial") {
        result = await props.donation.methods.memorialRequests().call();
      } else if (props.category === "Nonprofit") {
        result = await props.donation.methods.nonprofitRequests().call();
      } else if (props.category === "Religious") {
        result = await props.donation.methods.religiousRequests().call();
      } else if (props.category === "Sport") {
        result = await props.donation.methods.sportRequests().call();
      } else if (props.category === "Travel") {
        result = await props.donation.methods.travelRequests().call();
      } else if (props.category === "Volunteer") {
        result = await props.donation.methods.volunteerRequests().call();
      } else if (props.category === "Wish") {
        result = await props.donation.methods.wishRequests().call();
      }
      setTotalRequests(result);
    };

    getTotalRequests();
  }, [props.donation]);

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

  const createGrid = (PageRequests, currentPage) => {
    if (PageRequests === 3 || PageRequests < 3) {
      return (
        <div className="grid grid-rows-1 grid-cols-5 w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests, currentPage)}
        </div>
      );
    } else if (PageRequests === 6 || (PageRequests < 6 && PageRequests > 3)) {
      return (
        <div className="grid grid-rows-2 grid-cols-5 w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests, currentPage)}
        </div>
      );
    } else if (PageRequests === 9 || (PageRequests < 9 && PageRequests > 6)) {
      return (
        <div className="grid grid-rows-3 grid-cols-5 w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests, currentPage)}
        </div>
      );
    } else if (PageRequests === 12 || (PageRequests < 12 && PageRequests > 9)) {
      return (
        <div className="grid grid-rows-4 grid-cols-5 w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests, currentPage)}
        </div>
      );
    } else if (PageRequests > 12) {
      return (
        <div className="grid grid-rows-5 grid-cols-5 h-content w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests, currentPage)}
        </div>
      );
    }
  };

  const createBoxes = (pageRequests, currentPage) => {
    let output = [];

    let currentRequest = 0;
    if (props.currentPage != 1) {
      currentRequest = (props.currentPage - 1) * 15;
    }

    for (let box = 0; box < pageRequests; box++) {
      currentRequest += 1;
      output.push(
        <GridItems
          key={box}
          box={box}
          conversionRate={ConversionRate}
          currentPage={currentPage}
          _currency={Currency}
          donation={props.donation}
          currentRequest={currentRequest}
          category={props.category}
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
      );
    }
    return output;
  };

  const createPagesButton = (pageNumber, category, lastPage) => {
    let back = "back";
    let forward = "forward";

    const changePageForward = (direction, pageNumber, category) => {
      if (direction === "back") {
        pageNumber = parseInt(pageNumber) - 1;
      } else if (direction === "forward") {
        pageNumber = parseInt(pageNumber) + 1;
      }
      let lowercaseCategory = category.toLowerCase();
      return `/categories/${lowercaseCategory}/page/${pageNumber}`;
    };

    const pageNumberSize = (pageNumber) => {
      if (pageNumber < 10) {
        return (
          <div className="flex w-6 h-8 rounded-md justify-center items-center bg-light-anti-flash-white border-2">
            <p>{pageNumber}</p>
          </div>
        );
      } else if (pageNumber > 9 && pageNumber < 100) {
        return (
          <div className="flex w-8 h-8 rounded-md justify-center items-center bg-light-anti-flash-white border-2">
            <p>{pageNumber}</p>
          </div>
        );
      } else if (pageNumber > 99 && pageNumber < 1000) {
        return (
          <div className="flex w-10 h-8 rounded-md justify-center items-center bg-light-anti-flash-white border-2">
            <p>{pageNumber}</p>
          </div>
        );
      } else if (pageNumber > 999 && pageNumber < 10000) {
        return (
          <div className="flex w-12 h-8 rounded-md justify-center items-center bg-light-anti-flash-white border-2">
            <p>{pageNumber}</p>
          </div>
        );
      } else {
        return (
          <div className="flex w-14 h-8 rounded-md justify-center items-center bg-light-anti-flash-white border-2">
            <p>{pageNumber}</p>
          </div>
        );
      }
    };

    const returnButtons = () => {
      if (pageNumber == 1 && lastPage === false) {
        return (
          <div className="flex space-x-1 justify-end items-end">
            {pageNumberSize(pageNumber)}
            <Link
              href={changePageForward(forward, pageNumber, category)}
              passHref
            >
              <a className="flex w-6 h-8 rounded-md border-2 bg-anti-flash-white">
                <FontAwesomeIcon
                  className="flex w-6 justify-self-center self-center"
                  icon={faAngleRight}
                />
              </a>
            </Link>
          </div>
        );
      } else if (pageNumber == 1 && lastPage === true) {
        return (
          <div className="flex space-x-1 justify-end items-end">
            {pageNumberSize(pageNumber)}
          </div>
        );
      } else if (pageNumber != 1 && lastPage === true) {
        return (
          <div className="flex space-x-1 justify-end items-end">
            <Link href={changePageForward(back, pageNumber, category)} passHref>
              <a className="flex w-6 h-8 rounded-md border-2 bg-anti-flash-white">
                <FontAwesomeIcon
                  className="flex w-6 justify-self-center self-center"
                  icon={faAngleLeft}
                />
              </a>
            </Link>
            {pageNumberSize(pageNumber)}
          </div>
        );
      } else {
        return (
          <div className="flex space-x-1 justify-end items-end">
            <Link href={changePageForward(back, pageNumber, category)} passHref>
              <a className="flex w-6 h-8 rounded-md border-2 bg-anti-flash-white">
                <FontAwesomeIcon
                  className="flex w-6 justify-self-center self-center"
                  icon={faAngleLeft}
                />
              </a>
            </Link>
            {pageNumberSize(pageNumber)}
            <Link
              href={changePageForward(forward, pageNumber, category)}
              passHref
            >
              <a className="flex w-6 h-8 rounded-md border-2 bg-anti-flash-white">
                <FontAwesomeIcon
                  className="flex w-6 justify-self-center self-center"
                  icon={faAngleRight}
                />
              </a>
            </Link>
            ;
          </div>
        );
      }
    };

    if (PageRequests > 0) {
      return (
        <div className="grid grid-rows-1 grid-cols-5 w-screen h-12 gap-6">
          <div className="col-start-3"></div>
          <div className="flex space-x-1 justify-end items-end">
            {returnButtons()}
          </div>
        </div>
      );
    } else return;
  };

  const createCurrencyFilterButton = () => {
    if (PageRequests > 0) {
      return (
        <div className="grid grid-rows-1 grid-cols-5 w-screen h-12 gap-6">
          <div className="col-start-2">
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
        </div>
      );
    } else return;
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex h-content w-screen flex-wrap">
        <div className="w-screen text-center">
          <h1 className="text-3xl font-bold p-4">{props.category} Requests</h1>
        </div>
        {createCurrencyFilterButton()}
        {TotalRequests != 0 && props.currentPage != null ? (
          <div className="flex">
            {createGrid(PageRequests, props.currentPage)}
          </div>
        ) : TotalRequests == 0 && props.currentPage != null ? (
          <p className="flex text-2xl w-screen h-[80vh] items-center justify-center">
            There are no {props.category} Requests yet!
          </p>
        ) : (
          <p className="flex text-2xl w-screen h-[80vh] items-center justify-center">
            Loading...
          </p>
        )}
        {createPagesButton(props.currentPage, props.category, LastPage)}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryTemplate;
