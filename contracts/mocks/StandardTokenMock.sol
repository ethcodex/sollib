pragma solidity ^0.4.18;

import "../token/ERC20Token.sol";

// mock class using StandardToken
contract StandardTokenMock is ERC20Token {

  function StandardTokenMock(address initialAccount, uint256 initialBalance) public {
    balances[initialAccount] = initialBalance;
    _totalSupply = initialBalance;
  }

}