import { ethers } from "hardhat";

async function main() {
  const Greet = await ethers.getContractFactory("Greet");
  const greet = await Greet.deploy();
  await greet.waitForDeployment();
  console.log(`Greet.sol Deployed at ${greet.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
