# SantaNFT

Valory's 2021 Christmas NFTs

Try running some of the following tasks:

```shell
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js
```

To deloy:

- Update `private_key_here` and `api_key_here` in `hardhat.config.js` with your keys.
- Update constructor arguments of contract `SantaNFT`
- Run:

```
npx hardhat run scripts/deploy.js --network avalanche
```

To verify the oracle contract run (after updating `oracle_arguments.js` with the constructor arguments):
``` shell
npx hardhat verify --network avalanche DEPLOYED_CONTRACT_ADDRESS
```
