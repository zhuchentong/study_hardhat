import { ethers } from "hardhat";

async function main() {
  const greeting = "Hello, Zhuchentong!";
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy(greeting);

  await greeter.deployed();

  console.log(`Greeter with Hello, Zhuchentong deployed to ${greeter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
