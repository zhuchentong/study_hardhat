import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", () => {
  it("Shoule return the new greeting once it's changed", async () => {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello World!");

    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello World!");

    const setGreetingTx = await greeter.setGreeting("Hello NewUser!");

    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hello NewUser!");
  });
});
