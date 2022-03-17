const assert = require("assert");
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
});
