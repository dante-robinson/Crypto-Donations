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
      className="flex absolute mt-16 items-center justify-center space-x-6 bg-anti-flash-white w-full h-56 border-greyish-white border-2 rounded-md"
    >
      <ul className="flex flex-col p-6 space-y-4">
        <li>
          <FontAwesomeIcon className="mr-2" icon={faDog} width="20px" />
          <Link href="/categories/animal/page/1" passHref>
            <a className="hover:underline underline-offset-4">Animal</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faBuilding} width="20px" />
          <Link href="/categories/business/page/1" passHref>
            <a className="hover:underline underline-offset-4">Business</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faUsers} width="20px" />
          <Link href="/categories/community/page/1" passHref>
            <a className="hover:underline underline-offset-4">Community</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faTrophy} width="20px" />
          <Link href="/categories/competition/page/1" passHref>
            <a className="hover:underline underline-offset-4">Competition</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPaintbrush} width="20px" />
          <Link href="/categories/creative/page/1" passHref>
            <a className="hover:underline underline-offset-4">Creative</a>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col p-6 space-y-4">
        <li>
          <FontAwesomeIcon className="mr-2" icon={faBook} width="20px" />
          <Link href="/categories/education/page/1" passHref>
            <a className="hover:underline underline-offset-4">Education</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faKitMedical} width="20px" />
          <Link href="/categories/emergency/page/1" passHref>
            <a className="hover:underline underline-offset-4">Emergency</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faSeedling} width="20px" />
          <Link href="/categories/environment/page/1" passHref>
            <a className="hover:underline underline-offset-4">Environment</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faCalendarDays}
            width="20px"
          />
          <Link href="/categories/event/page/1" passHref>
            <a className="hover:underline underline-offset-4">Event</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPeopleRoof} width="20px" />
          <Link href="/categories/family/page/1" passHref>
            <a className="hover:underline underline-offset-4">Family</a>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col p-6 space-y-4">
        <li>
          <FontAwesomeIcon className="mr-2" icon={faPerson} width="20px" />
          <Link href="/categories/individual/page/1" passHref>
            <a className="hover:underline underline-offset-4">Individual</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faSyringe} width="20px" />
          <Link href="/categories/medical/page/1" passHref>
            <a className="hover:underline underline-offset-4">Medical</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faCross} width="20px" />
          <Link href="/categories/memorial/page/1" passHref>
            <a className="hover:underline underline-offset-4">Memorial</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="mr-2" icon={faGift} width="20px" />
          <Link href="/categories/nonprofit/page/1" passHref>
            <a className="hover:underline underline-offset-4">Non-Profit</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faHandsPraying}
            width="20px"
          />
          <Link href="/categories/religious/page/1" passHref>
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
          <Link href="/categories/sports/page/1" passHref>
            <a className="hover:underline underline-offset-4">Sports</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faPlaneDeparture}
            width="20px"
          />
          <Link href="/categories/travel/page/1" passHref>
            <a className="hover:underline underline-offset-4">Travel</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faHandshakeAngle}
            width="20px"
          />
          <Link href="/categories/volunteer/page/1" passHref>
            <a className="hover:underline underline-offset-4">Volunteer</a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            className="mr-2"
            icon={faStarHalfStroke}
            width="20px"
          />
          <Link href="/categories/wishes/page/1" passHref>
            <a className="hover:underline underline-offset-4">Wishes</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
