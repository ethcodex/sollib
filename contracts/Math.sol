pragma solidity ^0.4.18;

library Math {

  function max64(uint64 a, uint64 b) public pure returns (uint64) {
    return a >= b ? a : b;
  }

  function min64(uint64 a, uint64 b) public pure returns (uint64) {
    return a < b ? a : b;
  }

  function max256(uint256 a, uint256 b) public pure returns (uint256) {
    return a >= b ? a : b;
  }

  function min256(uint256 a, uint256 b) public pure returns (uint256) {
    return a < b ? a : b;
  }

}