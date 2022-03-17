let donation = artifacts.require("Storage");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(donation);
};
