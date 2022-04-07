import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
          <FontAwesomeIcon className="mr-2" icon={faDog} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/animal/1"
            passHref
          >
            Animal
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faBuilding} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/business/1"
            passHref
          >
            Business
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faUsers} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/community/1"
            passHref
          >
            Community
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faTrophy} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/competition/1"
            passHref
          >
            Competition
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPaintbrush} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/creative/1"
            passHref
          >
            Creative
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col p-6 space-y-2">
        <li>
          <FontAwesomeIcon className="mr-2" icon={faBook} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/education/1"
            passHref
          >
            Education
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faKitMedical} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/emergency/1"
            passHref
          >
            Emergency
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faSeedling} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/environment/1"
            passHref
          >
            Environment
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faCalendarDays}
            width="20px"
          />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/event/1"
            passHref
          >
            Event
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPeopleRoof} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/family/1"
            passHref
          >
            Family
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col p-6 space-y-2">
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPerson} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/individual/1"
            passHref
          >
            Individual
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faSyringe} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/medical/1"
            passHref
          >
            Medical
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faCross} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/memorial/1"
            passHref
          >
            Memorial
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faGift} width="20px" />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/nonprofit/1"
            passHref
          >
            Non-Profit
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faHandsPraying}
            width="20px"
          />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/religious/1"
            passHref
          >
            Religious
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col p-6 mb-8 space-y-2">
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faBaseballBatBall}
            width="20px"
          />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/sports/1"
            passHref
          >
            Sports
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faPlaneDeparture}
            width="20px"
          />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/travel/1"
            passHref
          >
            Travel
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faHandshakeAngle}
            width="20px"
          />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/volunteer/1"
            passHref
          >
            Volunteer
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faStarHalfStroke}
            width="20px"
          />
          <Link
            className="hover:underline underline-offset-2"
            href="/categories/wishes/1"
            passHref
          >
            Wishes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
