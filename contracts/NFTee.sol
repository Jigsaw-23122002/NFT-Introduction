// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// import the standard implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTee is ERC721 {
    constructor() ERC721("Learn Web3's NFT", "LNFT") {
        //Mint 1 NFT for myself
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }
    // Create an ERC721 contract
    // Mint some NFTs for myself
}
