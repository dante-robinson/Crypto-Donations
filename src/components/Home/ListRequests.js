import React, { useState, useEffect } from "react";
import HomeRequestItems from "./HomeRequestItems";

const ListRequests = (props) => {
  const [RequestArray, setRequestArray] = useState([]);
  const [Category, setCategory] = useState(null);
  const [Requests, setRequests] = useState(null);

  useEffect(() => {
    const getRandomCategory = async () => {
      /* Once every category has at least 4 requests this function can be deleted
      along with its useEffect. The uncommented part of getRequests function will need
      to be deleted and the comnmented out part can be uncommented. */
      let Categories = [
        await props.donation.methods.animalRequests().call(),
        await props.donation.methods.businessRequests().call(),
        await props.donation.methods.communityRequests().call(),
        await props.donation.methods.competitionRequests().call(),
        await props.donation.methods.creativeRequests().call(),
        await props.donation.methods.educationRequests().call(),
        await props.donation.methods.emergencyRequests().call(),
        await props.donation.methods.environmentRequests().call(),
        await props.donation.methods.eventRequests().call(),
        await props.donation.methods.familyRequests().call(),
        await props.donation.methods.individualRequests().call(),
        await props.donation.methods.medicalRequests().call(),
        await props.donation.methods.memorialRequests().call(),
        await props.donation.methods.nonprofitRequests().call(),
        await props.donation.methods.religiousRequests().call(),
        await props.donation.methods.sportRequests().call(),
        await props.donation.methods.travelRequests().call(),
        await props.donation.methods.volunteerRequests().call(),
        await props.donation.methods.wishRequests().call(),
      ];
      let eligibleCategories = [];

      // Add all categories to Array if they have over 4 Requests
      for (let i = 0; i < 19; i++) {
        if (Categories[i] >= 4) {
          if (i == 0) {
            eligibleCategories.push("Animal");
          } else if (i == 1) {
            eligibleCategories.push("Business");
          } else if (i == 2) {
            eligibleCategories.push("Community");
          } else if (i == 3) {
            eligibleCategories.push("Competition");
          } else if (i == 4) {
            eligibleCategories.push("Creative");
          } else if (i == 5) {
            eligibleCategories.push("Education");
          } else if (i == 6) {
            eligibleCategories.push("Emergency");
          } else if (i == 7) {
            eligibleCategories.push("Environment");
          } else if (i == 8) {
            eligibleCategories.push("Event");
          } else if (i == 9) {
            eligibleCategories.push("Family");
          } else if (i == 10) {
            eligibleCategories.push("Individual");
          } else if (i == 11) {
            eligibleCategories.push("Medical");
          } else if (i == 12) {
            eligibleCategories.push("Memorial");
          } else if (i == 13) {
            eligibleCategories.push("Nonprofit");
          } else if (i == 14) {
            eligibleCategories.push("Religious");
          } else if (i == 15) {
            eligibleCategories.push("Sport");
          } else if (i == 16) {
            eligibleCategories.push("Travel");
          } else if (i == 17) {
            eligibleCategories.push("Volunteer");
          } else if (i == 18) {
            eligibleCategories.push("Wish");
          }
        }
      }

      let SelectedCategory = Math.floor(
        Math.random() * eligibleCategories.length
      );

      return eligibleCategories[SelectedCategory];
    };

    function getResponse() {
      return getRandomCategory().then((value) => {
        setCategory(value);
      });
    }
    getResponse();
  }, []);

  useEffect(() => {
    if (Category === null) return;

    const getTotalRequests = async () => {
      let Requests;

      if (Category == "Animal") {
        Requests = await props.donation.methods.animalRequests().call();
      } else if (Category == "Business") {
        Requests = await props.donation.methods.businessRequests().call();
      } else if (Category == "Community") {
        Requests = await props.donation.methods.communityRequests().call();
      } else if (Category == "Competition") {
        Requests = await props.donation.methods.competitionRequests().call();
      } else if (Category == "Creative") {
        Requests = await props.donation.methods.creativeRequests().call();
      } else if (Category == "Education") {
        Requests = await props.donation.methods.educationRequests().call();
      } else if (Category == "Emergency") {
        Requests = await props.donation.methods.emergencyRequests().call();
      } else if (Category == "Environment") {
        Requests = await props.donation.methods.environmentRequests().call();
      } else if (Category == "Event") {
        Requests = await props.donation.methods.eventRequests().call();
      } else if (Category == "Family") {
        Requests = await props.donation.methods.familyRequests().call();
      } else if (Category == "Individual") {
        Requests = await props.donation.methods.individualRequests().call();
      } else if (Category == "Medical") {
        Requests = await props.donation.methods.medicalRequests().call();
      } else if (Category == "Memorial") {
        Requests = await props.donation.methods.memorialRequests().call();
      } else if (Category == "Nonprofit") {
        Requests = await props.donation.methods.nonprofitRequests().call();
      } else if (Category == "Religious") {
        Requests = await props.donation.methods.religiousRequests().call();
      } else if (Category == "Sport") {
        Requests = await props.donation.methods.sportRequests().call();
      } else if (Category == "Travel") {
        Requests = await props.donation.methods.travelRequests().call();
      } else if (Category == "Volunteer") {
        Requests = await props.donation.methods.volunteerRequests().call();
      } else if (Category == "Wish") {
        Requests = await props.donation.methods.wishRequests().call();
      }

      /*
    // * 19 for 19 categories
    let Requests;
    let number = Math.ceil(Math.random() * 19);
    if (number === 1) {
      Requests = await props.donation.methods.animalRequests().call();
    } else if (number === 2) {
      Requests = await props.donation.methods.businessRequests().call();
    } else if (number === 3) {
      Requests = await props.donation.methods.communityRequests().call();
    } else if (number === 4) {
      Requests = await props.donation.methods.competitionRequests().call();
    } else if (number === 5) {
      Requests = await props.donation.methods.creativeRequests().call();
    } else if (number === 6) {
      Requests = await props.donation.methods.educationRequests().call();
    } else if (number === 7) {
      Requests = await props.donation.methods.emergencyRequests().call();
    } else if (number === 8) {
      Requests = await props.donation.methods.environmentRequests().call();
    } else if (number === 9) {
      Requests = await props.donation.methods.eventRequests().call();
    } else if (number === 10) {
      Requests = await props.donation.methods.familyRequests().call();
    } else if (number === 11) {
      Requests = await props.donation.methods.individualRequests().call();
    } else if (number === 12) {
      Requests = await props.donation.methods.medicalRequests().call();
    } else if (number === 13) {
      Requests = await props.donation.methods.memorialRequests().call();
    } else if (number === 14) {
      Requests = await props.donation.methods.nonprofitRequests().call();
    } else if (number === 15) {
      Requests = await props.donation.methods.religiousRequests().call();
    } else if (number === 16) {
      Requests = await props.donation.methods.sportRequests().call();
    } else if (number === 17) {
      Requests = await props.donation.methods.travelRequests().call();
    } else if (number === 18) {
      Requests = await props.donation.methods.volunteerRequests().call();
    } else if (number === 19) {
      Requests = await props.donation.methods.wishRequests().call();
    } */
      return Requests;
    };

    function getValues() {
      return getTotalRequests().then((value) => {
        setRequests(value);
      });
    }

    getValues();
  }, [Category]);

  useEffect(() => {
    if (Requests == null) return;

    const getFourRequests = async () => {
      let requestOne = Math.ceil(Math.random() * Requests);
      let requestTwo = Math.ceil(Math.random() * Requests);
      let requestThree = Math.ceil(Math.random() * Requests);
      let requestFour = Math.ceil(Math.random() * Requests);

      // Make sure to not load same request multiple times

      if (requestTwo == requestOne) {
        for (let i = 0; requestTwo == requestOne; i++) {
          requestTwo = Math.ceil(Math.random() * Requests);
        }
      }
      if (requestThree == requestOne || requestTwo) {
        for (
          let i = 0;
          requestThree == requestOne || requestThree == requestTwo;
          i++
        ) {
          requestThree = Math.ceil(Math.random() * Requests);
        }
      }
      if (requestFour == requestOne || requestTwo || requestThree) {
        for (
          let i = 0;
          requestFour == requestOne ||
          requestFour == requestTwo ||
          requestFour == requestThree;
          i++
        ) {
          requestFour = Math.ceil(Math.random() * Requests);
        }
      }

      return [requestOne, requestTwo, requestThree, requestFour];
    };

    function getValues() {
      return getFourRequests().then((value) => {
        setRequestArray((RequestArray) => value);
      });
    }

    getValues();
  }, [Requests]);

  const createBoxes = () => {
    if (RequestArray === []) return;
    let output = [];

    // change currentRequest to random numbers
    // category also needs randomized

    for (let box = 0; box < 4; box++) {
      // Change category={"animal"} to category={Category} after testing is done
      output.push(
        <HomeRequestItems
          key={box}
          box={box}
          requestArray={RequestArray}
          _currency={"BTC"}
          donation={props.donation}
          category={"animal"}
        />
      );
    }
    return output;
  };

  return (
    <div className="pt-8 flex flex-wrap justify-center">
      <h1 className="text-4xl font-semibold">Check out these Requests</h1>
      {RequestArray.length === 4 && Requests !== null && Category !== null ? (
        <div className="pt-6 pb-6 flex space-x-6">{createBoxes()}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ListRequests;
