// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AlmacenEntero {
    uint256 public numero;

    function setNumero(uint256 _numero) public {
        numero = _numero;
    }
}