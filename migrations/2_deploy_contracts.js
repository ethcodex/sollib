const SafeMath = artifacts.require("./SafeMath.sol");
const SafeMathMock = artifacts.require("./mocks/SafeMathMock.sol");

// deply contract sequentailly
async function doDeploy(deployer, network) {
  await deployer.deploy(SafeMath);
  await deployer.link(SafeMath, SafeMathMock);
  await deployer.deploy(SafeMathMock);
}

module.exports = function (deployer, network) {
  deployer.then(() => doDeploy(deployer, network));
};