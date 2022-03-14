// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.12;

contract Storage {
  /* Create variables for total number of requests in each category strings for
  each will be defined in the UI. */
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
      uint256 id;
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

  struct Organizer {
    string name;
    // Will be defined in UI as selectable options similar to category
    string role;
    uint256 id;
    /* Coins are chosen based on being meant for medium of exchange with high
    transaction volume at the time. ADA and ETH are there aswell for smart
    contract support if people are interested in using that. */
    string[24] addresses;
    /* index 0 = btcAddress;
    index 1 = bchAddress;
    index 2 = adaAddress;
    index 3 = dashAddress;
    index 4 = dogeAddress;
    index 5 = ethAddress;
    index 6 = ltcAddress;
    index 7 = xmrAddress;
    index 8 = zecAddress;

    Extras just for support for other chains people may want to use if volume
    drops off in the future maybe re-evaluate showing these in UI to keep things
    more compact/clean.

    index 9 = algoAddress;
    index 10 = avaxAddress;
    index 11 = bscAddress;
    index 12 = atomAddress;
    index 13 = egldAddress;
    index 14 = etcAddress;
    index 15 = ftmAddress;
    index 16 = oneAddress;
    index 17 = lunaAddress;
    index 18 = dotAddress;
    index 19 = maticAddress;
    index 20 = solAddress;
    index 21 = xlmAddress;
    index 22 = trxAddress;
    index 23 = xrpAddress; */
  }

  // string = Category
  mapping (string => mapping (uint256 => Request)) Requests;

  // uint256 = Request ID
  mapping(string => mapping(uint256 => Contributor)) public Contributors;
  // category => id of request => id of organizer
  mapping(string => mapping(uint256 => mapping(uint256 => Organizer))) public Organizers;

  /* function returnCategory(uint256 _category) public returns (uint256){
    if (_category == 0) {
      return categories[0];
    }
  } */

  function createRequest (
    string memory _title,
    string memory _description,
    string memory _category,
    uint256 _amount
  ) public {
    /* Sorting into category variables makes the code more complex with large if
    else statements however may be useful in the case of the frontend being
    shutdown and needing to be redeployed with all the data in the proper location */
    if (keccak256(bytes(_category)) == keccak256(bytes("medical"))) {
      Requests[_category][medicalRequests] = Request(_title, _description, medicalRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("memorial"))) {
          Requests[_category][memorialRequests] = Request(_title, _description, memorialRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("emergency"))) {
          Requests[_category][emergencyRequests] = Request(_title, _description, emergencyRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("nonprofit"))) {
          Requests[_category][nonprofitRequests] = Request(_title, _description, nonprofitRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("education"))) {
          Requests[_category][educationRequests] = Request(_title, _description, educationRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("animal"))) {
          Requests[_category][animalRequests] = Request(_title, _description, animalRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("environment"))) {
          Requests[_category][environmentRequests] = Request(_title, _description, environmentRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("business"))) {
          Requests[_category][businessRequests] = Request(_title, _description, businessRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("community"))) {
          Requests[_category][communityRequests] = Request(_title, _description, communityRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("competition"))) {
          Requests[_category][competitionRequests] = Request(_title, _description, competitionRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("creative"))) {
          Requests[_category][creativeRequests] = Request(_title, _description, creativeRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("event"))) {
          Requests[_category][eventRequests] = Request(_title, _description, eventRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("religious"))) {
          Requests[_category][religiousRequests] = Request(_title, _description, religiousRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("family"))) {
          Requests[_category][familyRequests] = Request(_title, _description, familyRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("sport"))) {
          Requests[_category][sportRequests] = Request(_title, _description, sportRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("travel"))) {
          Requests[_category][travelRequests] = Request(_title, _description, travelRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("volunteer"))) {
          Requests[_category][volunteerRequests] = Request(_title, _description, volunteerRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("wish"))) {
          Requests[_category][wishRequests] = Request(_title, _description, wishRequests, _amount, 0, 0);
    } else if (keccak256(bytes(_category)) == keccak256(bytes("individual"))) {
          Requests[_category][individualRequests] = Request(_title, _description, individualRequests, _amount, 0, 0);
    }
  }

  function initalOrganzier (
    string memory _name,
    string memory _role,
    string memory _category,
    uint256 _requestId,
    uint256 _totalOrganizers,
    string[24] memory _addresses
  ) public {
    /* Not all addresses need to be assigned a value. In the UI any addresses not
    assigned by default should be set to "" which would mean an empty string.
    That will cause setting the mapping data to not fail. Role will also be set
    through the UI  */
    Organizers[_category][_requestId][_totalOrganizers] = Organizer(
      _name, _role, _totalOrganizers, [_addresses[0], _addresses[1], _addresses[2],
      _addresses[3], _addresses[4], _addresses[5], _addresses[6], _addresses[7],
      _addresses[8], _addresses[9], _addresses[10], _addresses[11], _addresses[12],
      _addresses[13], _addresses[14], _addresses[15], _addresses[16], _addresses[17],
      _addresses[18], _addresses[19], _addresses[20], _addresses[21], _addresses[22],
      _addresses[23]
      ]
    );
  }

  /* function editOrganziers () {} */

  /* function editRequest (
    string memory title,
    string memory description,
    string memory category,
    uint256 id
  ) public {

  } */

  /* function addAddressToOrganizer () public {

  }

  function verifyOrganizerAddress () public {}

  function upvoteRequest () public {}

  function downvoteRequest () public {}

  function updatePost () public {} */
}
