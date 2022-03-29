import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavigationBar from "./NavigationBar";

const CategoryTemplate = ({ category, donation }) => {
  const [TotalRequests, setTotalRequests] = useState(null);

  const router = useRouter();
  const { pid } = router.query;

  useEffect(async () => {
    if (!donation) return;
    await getTotalRequests();
    console.log(TotalRequests);
  }, [donation, TotalRequests]);

  const getTotalRequests = async () => {
    let result;
    if (category === "Animal") {
      result = await donation.methods.animalRequests().call();
      setTotalRequests(result);
    } else if (category === "Business") {
      result = await donation.methods.businessRequests().call();
      setTotalRequests(result);
    } else if (category === "Community") {
      result = await donation.methods.communityRequests().call();
      setTotalRequests(result);
    } else if (category === "Competition") {
      result = await donation.methods.competitionRequests().call();
      setTotalRequests(result);
    } else if (category === "Creative") {
      result = await donation.methods.creativeRequests().call();
      setTotalRequests(result);
    } else if (category === "Education") {
      result = await donation.methods.educationRequests().call();
      setTotalRequests(result);
    } else if (category === "Emergency") {
      result = await donation.methods.emergencyRequests().call();
      setTotalRequests(result);
    } else if (category === "Environment") {
      result = await donation.methods.environmentRequests().call();
      setTotalRequests(result);
    } else if (category === "Event") {
      result = await donation.methods.eventRequests().call();
      setTotalRequests(result);
    } else if (category === "Family") {
      result = await donation.methods.familyRequests().call();
      setTotalRequests(result);
    } else if (category === "Individual") {
      result = await donation.methods.individualRequests().call();
      setTotalRequests(result);
    } else if (category === "Medical") {
      result = await donation.methods.medicalRequests().call();
      setTotalRequests(result);
    } else if (category === "Memorial") {
      result = await donation.methods.memorialRequests().call();
      setTotalRequests(result);
    } else if (category === "Nonprofit") {
      result = await donation.methods.nonprofitRequests().call();
      setTotalRequests(result);
    } else if (category === "Religious") {
      result = await donation.methods.religiousRequests().call();
      setTotalRequests(result);
    } else if (category === "Sport") {
      setTotalRequestss = await donation.methods.sportRequests().call();
      setTotalRequests(result);
    } else if (category === "Travel") {
      result = await donation.methods.travelRequests().call();
      setTotalRequests(result);
    } else if (category === "Volunteer") {
      result = await donation.methods.volunteerRequests().call();
      setTotalRequests(result);
    } else if (category === "Wish") {
      result = await donation.methods.wishRequests().call();
      setTotalRequests(result);
    }
  };

  const getPages = () => {
    console.log(TotalRequests);
    if (TotalRequests === 0 || TotalRequests === null) {
      return <p>Their are no {category} Requests yet!</p>;
    } else if (TotalRequests < 15 && TotalRequests !== 0) {
      createGrid(TotalRequests, 1);
      createBoxes(TotalRequests);
    } else {
      let pages = TotalRequests / 15;
      createGrid(TotalRequests, pages);
    }
  };

  const createGrid = (requests, pages) => {
    if (requests === 3 || requests < 3) {
      return (
        <div className="grid grid-rows-1 grid-cols-5 w-screen grid-col-3 gap-6"></div>
      );
    } else if (requests === 6 || (requests < 6 && requests > 3)) {
      return (
        <div className="grid grid-rows-2 grid-cols-5 w-screen grid-col-3 gap-6"></div>
      );
    } else if (requests === 9 || (requests < 9 && requests > 6)) {
      return (
        <div className="grid grid-rows-3 grid-cols-5 w-screen grid-col-3 gap-6"></div>
      );
    } else if (requests === 12 || (requests < 12 && requests > 9)) {
      return (
        <div className="grid grid-rows-4 grid-cols-5 w-screen grid-col-3 gap-6"></div>
      );
    } else if (requests > 12) {
      return (
        <div className="grid grid-rows-5 grid-cols-5 w-screen grid-col-3 gap-6"></div>
      );
    }
  };

  const createBoxes = (requestsOnPage) => {
    for (let box = requestsOnPage; box < 15; box++) {
      if (box === 0 || box === 3 || box === 6 || box === 10 || box === 13) {
        <button className="col-start-2 border-4 border-bg-darker-white bg-light-anti-flash-white w-84 h-96 rounded-md"></button>;
      } else {
        <div className="border-4 border-bg-darker-white bg-light-anti-flash-white w-84 h-96 rounded-md"></div>;
      }
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex h-content w-screen flex-wrap">
        <div className="flex w-screen justify-center">
          <h1 className="flex text-3xl font-bold p-4">{category} Requests</h1>
        </div>
        <div>
          {TotalRequests == 0 ? (
            <p className="flex text-2xl w-screen h-[80vh] items-center justify-center">
              There are no {category} Requests yet!
            </p>
          ) : (
            <p>Other</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryTemplate;
