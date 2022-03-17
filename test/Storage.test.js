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
    // chai.should
    //   .equal(
    //     ),
    //     "Returned error: VM Exception while processing transaction: revert"
    //   )
    //   .to.throw();
  });
});
