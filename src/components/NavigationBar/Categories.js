import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faAngleDown,
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

const Categories = ({ CategoryRef, setCategoriesOpen }) => {
  return (
    <div
      ref={CategoryRef}
      className="flex absolute mt-16 items-center justify-center space-x-6 bg-anti-flash-white w-screen h-56 border-greyish-white border-2 rounded-md"
    >
      <ul className="flex flex-col p-6 space-y-4">
        <li>
          <FontAwesomeIcon className="mr-2" icon={faDog} width="20px" />
          <Link href="/categories/animal/1" passHref>
            <a className="hover:underline underline-offset-4">Animal</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faBuilding} width="20px" />
          <Link href="/categories/business/1" passHref>
            <a className="hover:underline underline-offset-4">Business</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faUsers} width="20px" />
          <Link href="/categories/community/1" passHref>
            <a className="hover:underline underline-offset-4">Community</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faTrophy} width="20px" />
          <Link href="/categories/competition/1" passHref>
            <a className="hover:underline underline-offset-4">Competition</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPaintbrush} width="20px" />
          <Link href="/categories/creative/1" passHref>
            <a className="hover:underline underline-offset-4">Creative</a>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col p-6 space-y-4">
        <li>
          <FontAwesomeIcon className="mr-2" icon={faBook} width="20px" />
          <Link href="/categories/education/1" passHref>
            <a className="hover:underline underline-offset-4">Education</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faKitMedical} width="20px" />
          <Link href="/categories/emergency/1" passHref>
            <a className="hover:underline underline-offset-4">Emergency</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faSeedling} width="20px" />
          <Link href="/categories/environment/1" passHref>
            <a className="hover:underline underline-offset-4">Environment</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faCalendarDays}
            width="20px"
          />
          <Link href="/categories/event/1" passHref>
            <a className="hover:underline underline-offset-4">Event</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPeopleRoof} width="20px" />
          <Link href="/categories/family/1" passHref>
            <a className="hover:underline underline-offset-4">Family</a>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col p-6 space-y-4">
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPerson} width="20px" />
          <Link href="/categories/individual/1" passHref>
            <a className="hover:underline underline-offset-4">Individual</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faSyringe} width="20px" />
          <Link href="/categories/medical/1" passHref>
            <a className="hover:underline underline-offset-4">Medical</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faCross} width="20px" />
          <Link href="/categories/memorial/1" passHref>
            <a className="hover:underline underline-offset-4">Memorial</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faGift} width="20px" />
          <Link href="/categories/nonprofit/1" passHref>
            <a className="hover:underline underline-offset-4">Non-Profit</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faHandsPraying}
            width="20px"
          />
          <Link href="/categories/religious/1" passHref>
            <a className="hover:underline underline-offset-4">Religious</a>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col p-6 mb-8 space-y-4">
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faBaseballBatBall}
            width="20px"
          />
          <Link href="/categories/sports/1" passHref>
            <a className="hover:underline underline-offset-4">Sports</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faPlaneDeparture}
            width="20px"
          />
          <Link href="/categories/travel/1" passHref>
            <a className="hover:underline underline-offset-4">Travel</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faHandshakeAngle}
            width="20px"
          />
          <Link href="/categories/volunteer/1" passHref>
            <a className="hover:underline underline-offset-4">Volunteer</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faStarHalfStroke}
            width="20px"
          />
          <Link href="/categories/wishes/1" passHref>
            <a className="hover:underline underline-offset-4">Wishes</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
