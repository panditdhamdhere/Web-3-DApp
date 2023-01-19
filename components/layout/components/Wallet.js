import styled from "styled-components"
import { ethers } from 'ethers';
import { useState } from "react";
const networks = {
    goerli: {
        chainId: `0x${Number(5).toString(16)}`,
        chainName: "Goerli Testnet",
        nativeCurrancy: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
        blockExplorelUrls: ["https://goerli.etherscan.io"]
    },
}


const Wallet = () => {

    const [address, setAddress] = useState('');
    const connectWallet = async () => {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.web3Provider(window.ethereum, "any")
        const account = provider.getSigner();
        const Address = await account.getAddress();
        setAddress(Address);

    }

    return (
        <div onClick={connectWallet}>Wallet { }</div>
    )
}




export default Wallet