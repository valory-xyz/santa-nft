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
    expect(await santaNFT.name()).to.equal("Valory Christmas Gifts 2021");
    expect(await santaNFT.symbol()).to.equal("VALORYXMAS21");
    expect(await santaNFT.supportsInterface("0x5b5e139f")).to.equal(true); //IERC721Metadata
    expect(await santaNFT.supportsInterface("0x80ac58cd")).to.equal(true); //IERC721
    expect(await santaNFT.supportsInterface("0x5a05180f")).to.equal(true); //IAccessControlEnumerable
    expect(await santaNFT.supportsInterface("0x780e9d63")).to.equal(true); //IERC721Enumerable

  });
});
