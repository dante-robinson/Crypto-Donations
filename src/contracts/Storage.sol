// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.12;

contract Storage {
  /* Create variables for total number of requests in each category strings for
  each will be defined in the UI. */
  uint256 public medicalRequests;
  uint256 public memorialRequests;
  uint256 public emergencyRequests;
  uint256 public nonprofitRequests;
  uint256 public educationRequests;
  uint256 public animalRequests;
  uint256 public environmentRequests;
  uint256 public businessRequests;
  uint256 public communityRequests;
  uint256 public competitionRequests;
  uint256 public creativeRequests;
  uint256 public eventRequests;
  uint256 public religiousRequests;
  uint256 public familyRequests;
  uint256 public sportRequests;
  uint256 public travelRequests;
  uint256 public volunteerRequests;
  uint256 public wishRequests;
  uint256 public individualRequests;

  struct Request {
      string title;
      string description;
      uint256 id;
      // Amount Requested
      uint256 amount;
      uint256 totalOrganizers;
      uint256 totalContributors;
      uint256 score;
      address creator;
      uint256 totalPosts;
  }

  struct Contributor {
    uint256 amountDonated;
    string name;
    string contributorAddress;
    uint256 id;
  }

  struct Organizer {
    string name;
    string role;
    uint256 id;
    /* Coins are chosen based on being meant for medium of exchange with high
    transaction volume at the time. ADA and ETH are there aswell for smart
    contract support if people are interested in using that. */
    string[23] addresses;
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
    index 22 = xrpAddress; */
  }

  // Date can be passed in from UI as UTC Time
  struct Post {
    string title;
    string description;
    string date;
  }

  // category => id of request
  mapping(string => mapping(uint256 => Request)) public Requests;
  // category => id of request => id of contributor
  mapping(string => mapping(uint256 => mapping(uint256 => Contributor))) public Contributors;
  // category => id of request => id of organizer
  mapping(string => mapping(uint256 => mapping(uint256 => Organizer))) public Organizers;
  // category => id of request => Polygon address of user
  mapping(string => mapping(uint256 => mapping(address => bool))) public isVoted;
  // category => id of request => id of post
  mapping(string => mapping(uint256 => mapping(uint256 => Post))) public Posts;

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
        Requests[_category][medicalRequests] = Request(_title, _description, medicalRequests, _amount, 0, 0, 0, msg.sender, 0);
        medicalRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("memorial"))) {
        Requests[_category][memorialRequests] = Request(_title, _description, memorialRequests, _amount, 0, 0, 0, msg.sender, 0);
        memorialRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("emergency"))) {
        Requests[_category][emergencyRequests] = Request(_title, _description, emergencyRequests, _amount, 0, 0, 0, msg.sender, 0);
        emergencyRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("nonprofit"))) {
        Requests[_category][nonprofitRequests] = Request(_title, _description, nonprofitRequests, _amount, 0, 0, 0, msg.sender, 0);
        nonprofitRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("education"))) {
        Requests[_category][educationRequests] = Request(_title, _description, educationRequests, _amount, 0, 0, 0, msg.sender, 0);
        educationRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("animal"))) {
        Requests[_category][animalRequests] = Request(_title, _description, animalRequests, _amount, 0, 0, 0, msg.sender, 0);
        animalRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("environment"))) {
        Requests[_category][environmentRequests] = Request(_title, _description, environmentRequests, _amount, 0, 0, 0, msg.sender, 0);
        environmentRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("business"))) {
        Requests[_category][businessRequests] = Request(_title, _description, businessRequests, _amount, 0, 0, 0, msg.sender, 0);
        businessRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("community"))) {
        Requests[_category][communityRequests] = Request(_title, _description, communityRequests, _amount, 0, 0, 0, msg.sender, 0);
        communityRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("competition"))) {
        Requests[_category][competitionRequests] = Request(_title, _description, competitionRequests, _amount, 0, 0, 0, msg.sender, 0);
        competitionRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("creative"))) {
        Requests[_category][creativeRequests] = Request(_title, _description, creativeRequests, _amount, 0, 0, 0, msg.sender, 0);
        creativeRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("event"))) {
        Requests[_category][eventRequests] = Request(_title, _description, eventRequests, _amount, 0, 0, 0, msg.sender, 0);
        eventRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("religious"))) {
        Requests[_category][religiousRequests] = Request(_title, _description, religiousRequests, _amount, 0, 0, 0, msg.sender, 0);
        religiousRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("family"))) {
        Requests[_category][familyRequests] = Request(_title, _description, familyRequests, _amount, 0, 0, 0, msg.sender, 0);
        familyRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("sport"))) {
        Requests[_category][sportRequests] = Request(_title, _description, sportRequests, _amount, 0, 0, 0, msg.sender, 0);
        sportRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("travel"))) {
        Requests[_category][travelRequests] = Request(_title, _description, travelRequests, _amount, 0, 0, 0, msg.sender, 0);
        travelRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("volunteer"))) {
        Requests[_category][volunteerRequests] = Request(_title, _description, volunteerRequests, _amount, 0, 0, 0, msg.sender, 0);
        volunteerRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("wish"))) {
        Requests[_category][wishRequests] = Request(_title, _description, wishRequests, _amount, 0, 0, 0, msg.sender, 0);
        wishRequests++;
    } else if (keccak256(bytes(_category)) == keccak256(bytes("individual"))) {
        Requests[_category][individualRequests] = Request(_title, _description, individualRequests, _amount, 0, 0, 0, msg.sender, 0);
        individualRequests++;
    }
  }

  /* Name should also have a default value of Anonymous in the UI for those who
    don't feel safe connecting names to addresses.
  */
  function addOrganzier (
    string memory _name,
    string memory _role,
    string memory _category,
    uint256 _requestId,
    uint256 _totalOrganizers,
    string[23] memory _addresses
  ) public {
    require(msg.sender == Requests[_category][_requestId].creator);
    /* Not all addresses need to be assigned a value. In the UI any addresses not
    assigned by default should be set to "" which would mean an empty string.
    That will cause setting the mapping data to not fail. Role will also be set
    through the UI  */
    Organizers[_category][_requestId][_totalOrganizers] = Organizer(
      _name, _role, _totalOrganizers, [_addresses[0], _addresses[1], _addresses[2],
      _addresses[3], _addresses[4], _addresses[5], _addresses[6], _addresses[7],
      _addresses[8], _addresses[9], _addresses[10], _addresses[11], _addresses[12],
      _addresses[13], _addresses[14], _addresses[15], _addresses[16], _addresses[17],
      _addresses[18], _addresses[19], _addresses[20], _addresses[21], _addresses[22]      ]
    );
    Requests[_category][_requestId].totalOrganizers++;
  }

  function editOrganzier (
    string memory _role,
    string memory _category,
    uint256 _requestId,
    uint256 _organizerId,
    string[23] memory _addresses
  ) public {
    require(msg.sender == Requests[_category][_requestId].creator);
    string memory _name = Organizers[_category][_requestId][_organizerId].name;
    /* This method will cost extra gas and can be improved upon. This can be
    solved by either taking in less addresses or another way. In it's current
    form it will call the current data from the blockchain and input it into the
    UI and once resubmitted you will paying that extra gas to rewrite the same
    address again for those unchanged. The goal would be to save that extra gas
    cost so only the address added/changed is what's sent back. */
    Organizers[_category][_requestId][_organizerId] = Organizer(
      _name, _role, _organizerId, [_addresses[0], _addresses[1], _addresses[2],
      _addresses[3], _addresses[4], _addresses[5], _addresses[6], _addresses[7],
      _addresses[8], _addresses[9], _addresses[10], _addresses[11], _addresses[12],
      _addresses[13], _addresses[14], _addresses[15], _addresses[16], _addresses[17],
      _addresses[18], _addresses[19], _addresses[20], _addresses[21], _addresses[22]
      ]
    );
  }

  /* Values come from blockchain calls. Title should also be immutable in case of
  an account getting hacked or a scammer changing the name and description of a
  request. Another alternative is to allow this to be changed but have the entire
  list of Contributors wiped. */
  function editRequest (
    string memory _description,
    string memory _category,
    uint256 _requestId,
    uint256 _amount
  ) public {
    require(msg.sender == Requests[_category][_requestId].creator);
    string memory _title = Requests[_category][_requestId].title;
    uint256 _totalOrganizers = Requests[_category][_requestId].totalOrganizers;
    uint256 _totalContributors = Requests[_category][_requestId].totalContributors;
    uint256 _score = Requests[_category][_requestId].score;
    address _creator = Requests[_category][_requestId].creator;
    uint256 _totalPosts = Requests[_category][_requestId].totalPosts;
    /* Category doesn't need the string checked like createRequest because that
    was just to */
    Requests[_category][_requestId] = Request(_title, _description, _requestId, _amount, _totalOrganizers, _totalContributors, _score, _creator, _totalPosts);
  }

  /* This feature may need to be disabled in UI in the future if it is used harmfully.
  This feature can easily be exploited through multiple self made accounts or even
  bot made to upvote scam requests to encourage people to donate to that request over
  a potentially real one. Therefore this should not be used as a feature to sort
  through requests and determine which is best to display first. */
  function voteRequest (
    string memory _category,
    uint256 _requestId,
    uint256 _score,
    bool vote
  ) public {
    require(isVoted[_category][_requestId][msg.sender] == false);
    string memory _title = Requests[_category][_requestId].title;
    string memory _description = Requests[_category][_requestId].description;
    uint256 _amount = Requests[_category][_requestId].amount;
    uint256 _totalOrganizers = Requests[_category][_requestId].totalOrganizers;
    uint256 _totalContributors = Requests[_category][_requestId].totalContributors;
    address _creator = Requests[_category][_requestId].creator;
    uint256 _totalPosts = Requests[_category][_requestId].totalPosts;
    /* Downvoting can cause a large majority of people to downvote a real donation
    request just bekcause it offends them or doesn't align with their views. This
    should not be solely used as a way to sort requests in the UI for this reason,
    hoever it should be kept in the system to alert people of something that may be
    a faker request or a scammer. The other flaw with this system is that with the
    low gas fees of hosting on a layer 2 protocol people can make many accounts and
    send small balances to boost the upvotes on their request even if it is a scam.
    Therefore this system may need to be disabled in the UI in the future if that is
    the case. */

    // bool = true then upvote else downvote
    if (vote) {
      _score++;
    } else {
      _score--;
    }

    Requests[_category][_requestId] = Request(_title, _description, _requestId, _amount, _totalOrganizers, _totalContributors, _score, _creator, _totalPosts);
  }

  function addContributor(
      string memory _category,
      uint256 _requestId,
      uint256 _totalContributors,
      string memory _name,
      uint256 _amountDonated,
      string memory _contributorAddress
  ) public {
    // _name & _contributorAddress in UI should be allowed to be listed as anonymous
    Contributors[_category][_requestId][_totalContributors] = Contributor(_amountDonated, _name, _contributorAddress, _totalContributors);
    Requests[_category][_requestId].totalContributors++;
  }

  function addPost (
    string memory _category,
    uint256 _requestId,
    uint256 _totalPosts,
    string memory _title,
    string memory _description,
    string memory _date
  ) public {
    require(msg.sender == Requests[_category][_requestId].creator);
    Posts[_category][_requestId][_totalPosts] = Post(_title, _description, _date);
    Requests[_category][_requestId].totalPosts++;

  }
}
