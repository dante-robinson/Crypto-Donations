require("chai").use(require("chai-as-promised")).should();
const Donation = artifacts.require("./Storage.sol");

contract("Donation", (accounts) => {
  let lottery;
  before(async () => {
    donation = await Donation.deployed();
  });
  it("should make a new request", async () => {
    await donation.createRequest("title", "description", "medical", 5);
    const creator = (await donation.Requests("medical", 0)).creator;
    // Check it equals an address instead of nothing
    assert.notEqual(creator, "0x0000000000000000000000000000000000000000");
  });
  it("checks that categories grow in size", async () => {
    // Check the medicalRequests category is equal to 1
    assert.equal((await donation.medicalRequests()).words[0], 1);
    await donation.createRequest("title", "description", "medical", 5);
    // After adding a second request recheck that the category equals 2
    assert.equal((await donation.medicalRequests()).words[0], 2);
  });
  it("should be able to edit the request", async () => {
    await donation.editRequest("new description", "medical", 0, 50);
    const description = (await donation.Requests("medical", 0)).description;
    const amount = (await donation.Requests("medical", 0)).amount;
    assert.equal(description, "new description");
    assert.equal(amount.words[0], 50);
  });
  it("should only let the creator edit the request", async () => {
    await donation
      .editRequest("new description", "medical", 1, 50, {
        from: accounts[1],
      })
      .should.be.rejectedWith(
        "VM Exception while processing transaction: revert"
      );
  });
  it("should be able to add organizers", async () => {
    const Organizers = (await donation.Requests("medical", 0)).totalOrganizers;
    const account = accounts[1];
    // The UI should auto submit any empty address input fields as empty string like so
    await donation.addOrganzier("John", "member", "medical", 0, Organizers, [
      account,"","","","","","","","","","","","","","","","","","","","","",""
    ]);
    assert.equal((await donation.Organizers("medical", 0, 0)).name, "John");
  });
  it("should only let the creator add organizers" , async () => {
    const Organizers = (await donation.Requests("medical", 1)).totalOrganizers;
    const account = accounts[1];

    await donation.addOrganzier("John", "member", "medical", 1, Organizers, [
      account,"","","","","","","","","","","","","","","","","","","","","",""
    ], { from: account }).should.be.rejectedWith(
      "VM Exception while processing transaction: revert"
    );
  });
  it("should be able to edit organizer", async () => {
    // Checks first address is accounts[1]
    assert.equal((await donation.getOrganizer("medical", 0, 0)).addresses[0], accounts[1]);
    await donation.editOrganizer("member", "medical", 0, 0, [
      "0x0","","","","","","","","","","","","","","","","","","","","","",""
    ])
    // This will check the first address changes to 0x0
    assert.equal((await donation.getOrganizer("medical", 0, 0)).addresses[0], "0x0");
  });
  it("should only let the creator edit organizers", async () => {
    await donation.editOrganizer("member", "medical", 0, 0, [
      "0x1","","","","","","","","","","","","","","","","","","","","","",""
    ], { from: accounts[1] }).should.be.rejectedWith(
      "VM Exception while processing transaction: revert"
    );
  });
  it("allows a user to vote on a request", async () => {
    await donation.voteRequest("medical", 0, true);
    assert.equal((await donation.Requests("medical", 0)).score.words[0], 1);
  });
  it("shouln't allow the user to vote twice on the request", async () => {
    await donation.voteRequest("medical", 0, true).should.be.rejectedWith(
      "VM Exception while processing transaction: revert"
    );
  });
  it("allows a user to contribute to a request", async () => {
    await donation.addContributor("medical", 0, "anonymous", 5, accounts[1]);
    assert.equal((await donation.Contributors("medical", 0, 0)).contributorAddress, accounts[1]);
  });
});
