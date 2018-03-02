pragma solidity ^0.4.18;

import "../SafeMath.sol";

contract SafeMathMock {
  using SafeMath for uint;

  uint256 public result;

  function multiply(uint256 a, uint256 b) public {
    result = a.safeMul(b);
  }

  function subtract(uint256 a, uint256 b) public {
    result = a.safeSub(b);
  }

  function add(uint256 a, uint256 b) public {
    result = SafeMath.safeAdd(a, b);
  }
}
