pragma solidity ^0.4.18;

import "../SafeMath.sol";

contract SafeMathMock {
  using SafeMath for uint;

  uint256 public result;

  function multiply(uint256 a, uint256 b) public {
    result = a.mul(b);
  }

  function subtract(uint256 a, uint256 b) public {
    result = a.sub(b);
  }

  function add(uint256 a, uint256 b) public {
    result = SafeMath.add(a, b);
  }
}
