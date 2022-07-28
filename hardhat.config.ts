import { HardhatUserConfig } from "hardhat/config";
import "hardhat-gas-reporter";
import { config as dotenv } from "dotenv";
import "@nomicfoundation/hardhat-toolbox";

dotenv();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.9" }],
    settings:{
      optimizer: {
        enabled: true,
        runs: 3000,
      }
    }
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    currency: "USD",
    enabled: true,
  },
};

export default config;
