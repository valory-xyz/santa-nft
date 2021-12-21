const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SantaNFT", function () {
  it("Should work!", async function () {
    const SantaNFT = await ethers.getContractFactory("SantaNFT");
    const santaNFT = await SantaNFT.deploy();
    await santaNFT.deployed();


    const accounts = await ethers.getSigners();
    const hash = "QmSJYeyCRnG5oBvLMnRsWNQcyGQQZAMeU4Sicy9fpUneDy";
    const awardItemTx = await santaNFT.awardItem(accounts[1].address, hash);

    // wait until the transaction is mined
    const tokenId = await awardItemTx.wait();
    console.log(tokenId);

    expect(await santaNFT.tokenURI(0)).to.equal("https://gateway.pinata.cloud/ipfs/QmSJYeyCRnG5oBvLMnRsWNQcyGQQZAMeU4Sicy9fpUneDy");

  });
});
