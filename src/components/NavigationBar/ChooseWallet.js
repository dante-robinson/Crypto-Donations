import React, { useRef } from "react";
import Image from "next/image";
import OnClickOutside from "../OnClickOutside";
import Metamask from "../../../public/Metamask.png";
import WalletConnect from "../../../public/WalletConnect.png";
import Fortmatic from "../../../public/Fortmatic.png";
import Portis from "../../../public/Portis.png";
import CoinbaseWallet from "../../../public/CoinbaseWallet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ChooseWallet = ({ setChooseWalletOpen }) => {
  const ref = useRef();
  OnClickOutside(ref, () => setChooseWalletOpen(false));

  return (
    <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
      <div
        ref={ref}
        className="bg-anti-flash-white w-[26rem] h-[32rem] rounded-lg"
      >
        <h3 className="text-xl text-center mt-8">Connect a wallet</h3>
        <div className="flex justify-end mr-4 relative bottom-12 text-2xl">
          <button
            className="text-2xl"
            onClick={() => setChooseWalletOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="flex flex-col mb-2 items-center space-y-4">
          <button className="flex justify-between items-center bg-greyish-white border border-gray-400 w-96 h-16 rounded-lg">
            <div className="ml-4">
              <p>Metamask</p>
            </div>
            <div className="flex mr-1">
              <Image src={Metamask} alt="Icon" width="45px" height="45px" />
            </div>
          </button>
          <button className="flex justify-between bg-greyish-white border border-gray-400 w-96 h-16 items-center rounded-lg">
            <div className="ml-4">
              <p>WalletConnect</p>
            </div>
            <div className="flex mr-1">
              <Image
                src={WalletConnect}
                alt="Icon"
                width="45px"
                height="45px"
              />
            </div>
          </button>

          <button className="flex justify-between bg-greyish-white border border-gray-400 w-96 h-16 items-center rounded-lg">
            <div className="ml-4">
              <p>Fortmatic</p>
            </div>
            <div className="flex mr-2">
              <Image src={Fortmatic} alt="Icon" width="30px" height="30px" />
            </div>
          </button>

          <button className="flex justify-between bg-greyish-white border border-gray-400 w-96 h-16 items-center rounded-lg">
            <div className="ml-4">
              <p>Portis</p>
            </div>
            <div className="flex mr-2">
              <Image src={Portis} alt="Icon" width="35px" height="35px" />
            </div>
          </button>
          <button className="flex justify-between bg-greyish-white border border-gray-400 w-96 h-16 items-center rounded-lg">
            <div className="ml-4">
              <p>Coinbase Wallet</p>
            </div>
            <div className="flex mr-2">
              <Image
                src={CoinbaseWallet}
                alt="Icon"
                width="35px"
                height="35px"
              />
            </div>
          </button>
        </div>
        <div className="flex mb-2 justify-center">
          <p className="flex">Needed to connect to the Polygon network</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseWallet;
