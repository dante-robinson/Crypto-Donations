import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faBuilding,
  faUsers,
  faTrophy,
  faPaintbrush,
  faBook,
  faKitMedical,
  faSeedling,
  faCalendarDays,
  faPeopleRoof,
  faPerson,
  faSyringe,
  faCross,
  faGift,
  faHandsPraying,
  faBaseballBatBall,
  faPlaneDeparture,
  faHandshakeAngle,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <div className="flex absolute ml-24 mt-16 items-center bg-anti-flash-white w-[40rem] h-48 border-greyish-white border-2 rounded-md">
      <ul className="flex flex-col p-6 space-y-2">
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/animal/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faDog} width="20px" />
            Animal
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/business/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faBuilding} width="20px" />
            Business
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/community/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faUsers} width="20px" />
            Community
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/competition/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faTrophy} width="20px" />
            Competition
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/creative/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faPaintbrush}
              width="20px"
            />
            Creative
          </a>
        </li>
      </ul>
      <ul className="flex flex-col p-6 space-y-2">
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/education/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faBook} width="20px" />
            Education
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/emergency/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faKitMedical}
              width="20px"
            />
            Emergency
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/environment/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faSeedling} width="20px" />
            Environment
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/event/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faCalendarDays}
              width="20px"
            />
            Event
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/family/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faPeopleRoof}
              width="20px"
            />
            Family
          </a>
        </li>
      </ul>
      <ul className="flex flex-col p-6 space-y-2">
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/individual/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faPerson} width="20px" />
            Individual
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/medical/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faSyringe} width="20px" />
            Medical
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/memorial/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faCross} width="20px" />
            Memorial
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/nonprofit/1"
          >
            <FontAwesomeIcon className="mr-2" icon={faGift} width="20px" />
            Non-Profit
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/religious/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faHandsPraying}
              width="20px"
            />
            Religious
          </a>
        </li>
      </ul>
      <ul className="flex flex-col p-6 mb-8 space-y-2">
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/sports/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faBaseballBatBall}
              width="20px"
            />
            Sports
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/travel/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faPlaneDeparture}
              width="20px"
            />
            Travel
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/volunteer/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faHandshakeAngle}
              width="20px"
            />
            Volunteer
          </a>
        </li>
        <li>
          <a
            className="hover:underline underline-offset-2"
            href="/categories/wishes/1"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faStarHalfStroke}
              width="20px"
            />
            Wishes
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
