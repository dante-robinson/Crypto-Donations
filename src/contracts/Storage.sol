// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.12;

contract Storage {
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

  struct Request {
      string title;
      string description;
      // Amount Requested
      uint256 amount;
      uint256 totalOrganizers;
      uint256 totalContributors;
  }

  struct Contributor {
    uint256 amountDonated;
    string name;
    string contributorAddress;
  }

  /* struct Organizer {
    string name;
    string role;
    // Addresses strings because solidity wont accept other blockchain addresses
    // "CompilerError: Stack too deep, try removing local variables."
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
  } */

  // string = Category
mapping (string => mapping (uint256 => Request)) Requests;

  // uint256 = Request ID
  mapping(uint256 => Contributor) public Contributors;
  /* mapping(string => mapping(uint256 => Organizer)) public Organizers; */

  /* function returnCategory(uint256 _category) public returns (uint256){
    if (_category == 0) {
      return categories[0];
    }
  } */

  function createRequest (
    string memory title,
    string memory description,
    string memory category,
    uint256 amount
  ) public {
    if (keccak256(bytes(category)) == keccak256(bytes("medical"))) {
      Requests[category][medicalRequests] = Request(title, description, amount, 0, 0);
    }
  }

  function editRequest (
    string memory title,
    string memory description,
    string memory category,
    uint256 id
  ) public {

  }

  /* function addAddressToOrganizer () public {

  }

  function verifyOrganizerAddress () public {}

  function upvoteRequest () public {}

  function downvoteRequest () public {}

  function updatePost () public {} */
}
