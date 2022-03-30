import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavigationBar from "./NavigationBar";
import GridItems from "./CategoryTemplate/GridItems";

const CategoryTemplate = ({ category, donation }) => {
  const [TotalRequests, setTotalRequests] = useState(null);
  const [Pages, setPages] = useState(null);
  const [PageRequests, setPageRequests] = useState(null);
  const [LastPage, setLastPage] = useState(false);

  const router = useRouter();
  const currentPage = router.query.pid;

  useEffect(() => {
    if (TotalRequests == null) return;
    getPages();
    isLastPage();
    getPageRequests();
    /* currentPage takes the longest to load so refreshing on that alone prevents
    multiple refreshes of the useEffect functions */
  }, [TotalRequests]);

  useEffect(() => {
    if (!donation) return;
    getTotalRequests();
  }, [donation]);

  const getTotalRequests = async () => {
    let result;
    if (category === "Animal") {
      result = await donation.methods.animalRequests().call();
    } else if (category === "Business") {
      result = await donation.methods.businessRequests().call();
    } else if (category === "Community") {
      result = await donation.methods.communityRequests().call();
    } else if (category === "Competition") {
      result = await donation.methods.competitionRequests().call();
    } else if (category === "Creative") {
      result = await donation.methods.creativeRequests().call();
    } else if (category === "Education") {
      result = await donation.methods.educationRequests().call();
    } else if (category === "Emergency") {
      result = await donation.methods.emergencyRequests().call();
    } else if (category === "Environment") {
      result = await donation.methods.environmentRequests().call();
    } else if (category === "Event") {
      result = await donation.methods.eventRequests().call();
    } else if (category === "Family") {
      result = await donation.methods.familyRequests().call();
    } else if (category === "Individual") {
      result = await donation.methods.individualRequests().call();
    } else if (category === "Medical") {
      result = await donation.methods.medicalRequests().call();
    } else if (category === "Memorial") {
      result = await donation.methods.memorialRequests().call();
    } else if (category === "Nonprofit") {
      result = await donation.methods.nonprofitRequests().call();
    } else if (category === "Religious") {
      result = await donation.methods.religiousRequests().call();
    } else if (category === "Sport") {
      result = await donation.methods.sportRequests().call();
    } else if (category === "Travel") {
      result = await donation.methods.travelRequests().call();
    } else if (category === "Volunteer") {
      result = await donation.methods.volunteerRequests().call();
    } else if (category === "Wish") {
      result = await donation.methods.wishRequests().call();
    }
    setTotalRequests(result);
  };

  const getPages = () => {
    setPages(Math.ceil(TotalRequests / 15));
  };

  const isLastPage = () => {
    if (Pages === currentPage) {
      setPageRequests(TotalRequests % 15);
      setLastPage(true);
    }
  };

  const getPageRequests = () => {
    if (LastPage == false) {
      setPageRequests(15);
    }
  };

  const createGrid = (PageRequests) => {
    if (PageRequests === 3 || PageRequests < 3) {
      return (
        <div className="grid grid-rows-1 grid-cols-5 w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests)}
        </div>
      );
    } else if (PageRequests === 6 || (PageRequests < 6 && PageRequests > 3)) {
      return (
        <div className="grid grid-rows-2 grid-cols-5 w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests)}
        </div>
      );
    } else if (PageRequests === 9 || (PageRequests < 9 && PageRequests > 6)) {
      return (
        <div className="grid grid-rows-3 grid-cols-5 w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests)}
        </div>
      );
    } else if (PageRequests === 12 || (PageRequests < 12 && PageRequests > 9)) {
      return (
        <div className="grid grid-rows-4 grid-cols-5 w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests)}
        </div>
      );
    } else if (PageRequests > 12) {
      return (
        <div className="grid grid-rows-5 grid-cols-5 h-content w-screen grid-col-3 gap-6">
          {createBoxes(PageRequests)}
        </div>
      );
    }
  };

  const createBoxes = (pageRequests) => {
    let output = [];
    for (let box = 0; box < pageRequests; box++) {
      output.push(<GridItems key={box} box={box} />);
    }
    return output;
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex h-content w-screen flex-wrap">
        <div className="flex w-screen justify-center">
          <h1 className="flex text-3xl font-bold p-4">{category} Requests</h1>
        </div>
        {TotalRequests == 0 ? (
          <p className="flex text-2xl w-screen h-[80vh] items-center justify-center">
            There are no {category} Requests yet!
          </p>
        ) : (
          <div className="flex">{createGrid(PageRequests)}</div>
        )}
      </div>
    </div>
  );
};

export default CategoryTemplate;
