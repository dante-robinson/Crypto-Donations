import React from "react";

const Tips = () => {
  return (
    <div className="flex flex-wrap justify-center border-2 drop-shadow-sm rounded-md">
      <h1 className="text-4xl pt-8 pb-6 font-semibold justify-self-center">
        Tips
      </h1>
      <ul className="pb-8 space-y-2 px-4 text-center justify-self-center">
        <li>
          Use a hardware wallet like the Ledger Nano X or Trezor Model T. This
          ensures that a you own your private keys so a company or exchange
          can&apos;t block your account from accessing your funds.
        </li>
        <li>
          Make a brand new wallet to recieve donations to. This will prevent
          people from seeing your transaction history of your main wallet. If
          you don&apos;t want to spend the funds from that wallet you can then
          send the money to a non KYC Exchange to which is usually a general
          wallet address or use a Third Party before sending money back to you
          main wallet.
        </li>
        <li>
          You should make a new address for each donation you are accepting if
          you are making multiple requests.
        </li>
      </ul>
    </div>
  );
};

export default Tips;
