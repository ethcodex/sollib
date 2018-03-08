pragma solidity ^0.4.18;

library SafeMath {

  function mul(uint a, uint b) internal pure returns (uint) {
    uint c = a * b;
    assert(a == 0 || c / a == b);
    return c;
  }

  // function safeDiv(uint a, uint b) pure internal returns (uint) {
  //   // assert(b > 0); // Solidity automatically throws when dividing by 0
  //   uint c = a / b;
  //   // assert(a == b * c + a % b); // There is no case in which this doesn't hold
  //   return c;
  // }

  function sub(uint a, uint b) internal pure returns (uint) {
    assert(b <= a);
    return a - b;
  }

  function add(uint a, uint b) internal pure returns (uint) {
    uint c = a + b;
    // assert(c>=a && c>=b);
    assert(c >= a);
    return c;
  }

}