// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.12;

contract Storage {

  struct Request {
      string title;
      string description;
      // Amount Requested
      uint256 amount;
      uint256 totalContributors;
      // uint256 = totalContributors
      mapping (uint256 => Contributor) Contributors;
      // Addresses
      string algoAddress;
      string avaxAddress;
      string bscAddress;
      string btcAddress;
      string bchAddress;
      string adaAddress;
      string atomAddress;
      string dashAddress;
      string dcrAddress;
      string dgbAddress;
      string dogeAddress;
      string egldAddress;
      string ethAddress;
      string etcAddress;
      string ftmAddress;
      string oneAddress;
      string zenAddress;
      string ltcAddress;
      string xmrAddress;
      string dotAddress;
      string maticAddress;
      string rskAddress;
      string solAddress;
      string xlmAddress;
      string xtzAddress;
      string trxAddress;
      string xrpAddress;
      string zecAddress;
  }

  // Create variables for total number of requests in each category
  uint256 medicalRequests;
  uint256 memorialRequests;
  uint256 emergencyRequests;
  uint256 nonprofitRequests;
  uint256 educationRequests;
  uint256 animalRequests;
  uint256 environmentRequests;
  uint256 businessRequests;
  uint256 communityRequests;
  uint256 competitionRequests;
  uint256 creativeRequests;
  uint256 eventRequests;
  uint256 religiousRequests;
  uint256 familyRequests;
  uint256 sportRequests;
  uint256 travelRequests;
  uint256 volunteerRequests;
  uint256 wishRequests;
  uint256 individualRequests;

  // uint256 = Request ID (String selected via UI)
  mapping(string => mapping (uint256 => Request)) Requests;

  struct Contributor {
    uint256 amountDonated;
    string contributorAddress;
  }

  mapping(uint256 => Contributor) public Contributors;

  function createRequest (
    string memory title,
    string memory description
  ) public {


  }

  function editRequest (
    string memory title,
    string memory description
  ) public {}

  function addAddressToRequest () public {}

  function verifyAddress () public {}

  function upvote () public {}

  function downvote () public {}

  function makeUpdatePost () public {}
}
