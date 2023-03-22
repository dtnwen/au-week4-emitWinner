// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IContract {
    function attempt() external;
}

contract Winner {
    function emitWinner(address contractFinal) external {
        IContract(contractFinal).attempt();
    }
}
