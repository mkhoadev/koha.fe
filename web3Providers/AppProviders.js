import { ethers } from "ethers";

export const connectWallet = async () => {
    if (typeof window.ethereum !== undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log(await signer.getAddress());
    }
};
