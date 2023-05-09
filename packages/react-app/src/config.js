import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xeE31F809c7481c1F2F702B99813c118b4E190E30";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]:
      "https://eth-sepolia.g.alchemy.com/v2/K_s2TTIb8jx44f09qm7vT5e9YBPOocCf",
  },
};
