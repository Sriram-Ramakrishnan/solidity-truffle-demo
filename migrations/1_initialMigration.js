const file = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
    deployer.deploy(file);
};