// ethers.js comes in built with hardhat
// ethers.js is a really nice library to work with ethereum

// import ethers
const { ethers } = require("hardhat");

async function main() {
  // Somehow tell the script that we want to deploy the 'NFTee.sol' contract
  const contract = await ethers.getContractFactory("NFTee");

  // Deploy it
  const deployedContract = await contract.deploy();
  await deployedContract.deployed();

  // Print the address of the deployed contract.
  console.log("NFT contract deployed to ", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
