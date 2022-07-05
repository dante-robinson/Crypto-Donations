# Unstoppable Donations

[Goal of the Project](#goals) <br />
[FAQ](#faq) <br />
[How it works](#how-it-works) <br />

## <a name="goals">Goal of the Project</a>

The goal of this project was quite simple. After seeing the way the governments and companies can abuse power to censor people the choice to make a donation platform for all that can't be taken down was needed. The project is completely non-profit and FOSS you can review the code yourself and even make your own front-end to connect to it yourself if you want.

## <a name="faq">FAQ</a>

### What are the benefits of this project over the traditional system?

To keep things simple people who want to open a request will have to pay a gas fee to store that request on the network their is no % given to development this is strictly the cost of using the blockchain to store any amount of data. Once your request is open you can connect your crypto addresses to it and even add multiple people to a request for a group donation effort. The data is then immutable, governments and companies cannot censor you and will not be able to change/remove the addresses without your private key.

### What coins are supported?

<p>
  <a href="https://bitcoin.org/">
    <img src="public/Bitcoin.png" width=64 />
  </a>
  <a href="https://bch.info/">
    <img src="public/BitcoinCash.png" width=64 />
  </a>
  <a href="https://cardano.org/">
    <img src="public/Cardano.png" width=64 />
  </a>
  <a href="https://www.dash.org/">
    <img src="public/Dash.png" width=64 />
  </a>
  <a href="https://dogecoin.com/">
    <img src="public/Dogecoin.png" width=64 />
  </a>
  <a href="https://ethereum.org/">
    <img src="public/Ethereum.png" width=64 />
  </a>
  <a href="https://litecoin.org/">
    <img src="public/Litecoin.png" width=64 />
  </a>
  <a href="https://www.getmonero.org/">
    <img src="public/Monero.png" width=64 />
  </a>
  <a href="https://polygon.technology/">
    <img src="public/Polygon.png" width=64 />
  </a>
  <a href="https://xrpl.org/">
    <img src="public/Ripple.png" width=64 />
  </a>
  <a href="https://www.stellar.org/">
    <img src="public/Stellar.png" width=64 />
  </a>
  <a href="https://z.cash/">
    <img src="public/ZCash.png" width=64 />
  </a>
</p>

### What do I need to use this platform?

This project uses Polygon as the back-end you do not need to sign up for an account on a centralized server all that is needed is a Polygon account through a wallet.

### What if Proof of Stake / Polygon fails?

If Proof of Stake/Polygon were to fail then we can assume the nodes for polygon would be taken off the network the data would then in this case be lost however the contract can then be redeployed to something like Ethereum Classic that uses a Proof of Work Model, however all the data would still need to be re-uploaded, which would require everyone to make new requests.

### Why is x/y coin not supported?

Coins were selected based on high volume as well as being used for mainly medium of exchange or a smart contract platform. Not every coin in the world needs to be supported and just adds more unnecessary code to the codebase. The current selection is quite large and should fit 99% of people's needs.

### How much percentage do you take?

0%. This project is 100% non-profit the only fee is the gas fee to upload the data to the blockchain ledger however that does not go to me that goes to the Polygon node operators.

### What can I use this for?

You can use this as an alternative to centralized application such as GoFundMe or setup an individual page to keep a list of your wallets for people who may be interested in donating to you. You can also join a community or make your own you can set these up where you need to approve those asking to join your community (eg. a FOSS company) or leave it open for anyone interested to be able to join (eg. a group of people who support FOSS).

### What if front end gets taken down?

Since everything is stored on nodes on the blockchain and not stored on a centralized server if the website was to get taken down the source code can be used to deploy the front end to a different domain name. Since the data is stored on the blockchain this project can even have multiple different front-end websites connecting to it and reading the data from the deployed address.

### How can I help the project?

The best thing to do would be to start running a Polygon node, you can also run an Ethereum node if you would like as well since Polygon relies on Ethereum as it's layer 1. The more nodes on the network the more decentralized it is because each node is storing the ledger of data.

### How can I connect my own front-end to this smart contract?

You can fork the repo and work directly with the contract making your changes. You can reference the current front-end to see how things are connected and what is called from the blockchain to retrieve which data.
The address for the smart contract to connect directly to is TBD.

### Can I just fork this and make my own version of the smart contract?

This project is completely FOSS (Free Open Source Software) it is licensed under the LGPL v3 License meaning it would have to also be open sourced. I would advise against doing this however as its easier to have one large ledger of data than multiple separate pools of it. You can submit code to this repo directly if you would like, and if you would like to continue deploying it as a separate contract you can fork the repo and do so.

## <a name="how-it-works">How it works</a>

1. The user will make a Request and submit it to the network. This will cost a gas fee.
2. After creating the request the user will then be asked to input data of who is to receive the funds (Organizer). This allows the user to not just list themselves but they can choose to list a friend or family member in need for a request as well with their wallet address. This will also cost a gas fee.

That's it at this point the Data for the request and Organizer should be stored in Polygon's ledger. To send funds to someone you are not sending anything through Polygon, the front-end is meant to simply list out addresses for people to be able to use to send funds from their wallets.
