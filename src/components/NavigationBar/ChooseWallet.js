import React, { useRef } from "react";
import Image from "next/image";
import OnClickOutside from "../OnClickOutside";
import Metamask from "../../../public/Metamask.png";
import WalletConnect from "../../../public/WalletConnect.png";
import Portis from "../../../public/Portis.png";
import CoinbaseWallet from "../../../public/CoinbaseWallet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const ChooseWallet = ({ setChooseWalletOpen }) => {
  const ref = useRef();
  OnClickOutside(ref, () => setChooseWalletOpen(false));

  const {
    active,
    account,
    library,
    connector,
    activate,
    error,
  } = useWeb3React();

  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;

  const connect = async (connector) => {
    try {
      await activate(connector);
      setChooseWalletOpen(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  // Metamask
  const injected = new InjectedConnector({
    supportedChainIds: [80001],
  });

  // WalletConnect
  const walletconnect = new WalletConnectConnector({
    rpc: {
      80001:
        "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.ALCHEMY_API,
    },
  });

  // Portis
  const portis = new PortisConnector({
    dAppId: process.env.PORTIS_DAPP_ID,
    networks: [80001],
  });

  // WalletLink (Coinbase)
  const walletlink = new WalletLinkConnector({
    url: "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.ALCHEMY_API,
    appName: "Unstoppable Donations",
    supportedChainIds: [80001],
  });

  return (
    <div className="bg-black overflow-hidden fixed bg-opacity-50 z-20 inset-0 flex justify-center items-center">
      <div
        ref={ref}
        className="bg-anti-flash-white w-[26rem] h-[28rem] rounded-lg"
      >
        <h3 className="text-xl text-center mt-7">Connect a wallet</h3>
        <div className="flex justify-end mr-3 relative bottom-[3.25rem] text-2xl">
          <button
            className="text-2xl"
            onClick={() => setChooseWalletOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="flex flex-col relative bottom-3 mb-3 items-center space-y-4">
          <button
            onClick={(async) => connect(injected)}
            className="flex justify-between bg-greyish-white hover:bg-darker-white border border-gray-400 w-96 h-16 items-center rounded-lg"
          >
            <div className="ml-4">
              <p>Metamask</p>
            </div>
            <div className="flex mr-1">
              <Image src={Metamask} alt="Icon" width="45px" height="45px" />
            </div>
          </button>

          <button
            onClick={(async) => connect(walletconnect)}
            className="flex justify-between bg-greyish-white hover:bg-darker-white border border-gray-400 w-96 h-16 items-center rounded-lg"
          >
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

          <button
            onClick={(async) => connect(portis)}
            className="flex justify-between bg-greyish-white hover:bg-darker-white border border-gray-400 w-96 h-16 items-center rounded-lg"
          >
            <div className="ml-4">
              <p>Portis</p>
            </div>
            <div className="flex mr-2">
              <Image src={Portis} alt="Icon" width="35px" height="35px" />
            </div>
          </button>
          <button
            onClick={(async) => connect(walletlink)}
            className="flex justify-between bg-greyish-white hover:bg-darker-white border border-gray-400 w-96 h-16 items-center rounded-lg"
          >
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
