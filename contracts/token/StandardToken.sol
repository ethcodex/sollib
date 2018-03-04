pragma solidity ^0.4.18;

import "./ERC827.sol";
import "./ERC20Token.sol";

/**
   @title StandardToken
   ERC20 token with name, symbol and decimals
 */
contract StandardToken is ERC20Token {
  string  public name;        // name of this token
  string  public symbol;      // symbol of this token
  uint8   public decimals;    // 18 for 'ether'
}