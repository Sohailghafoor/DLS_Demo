import React,  { useState, useEffect } from 'react';
import Web3 from 'web3';
import MyToken from "./MyToken.json";
const nftMyAddress = "0x3166DE5dDEc778147d92542f5f22511E9663FdE7";

const Home = () => {
    const [address, setAddress] = useState(null);
    const [balance, setBalance] = useState(null);
    useEffect(() => {
    
      setData();
    }, []);
    const setData = async () => {
        setAddress(address);
        setBalance(balance);

    }
    const connectWallet = async () => {
        try {
          if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            const address = accounts[0];
            const balances = await web3.eth.getBalance(address, 'latest');
            const balance = web3.utils.fromWei(balances, 'ether')
            setAddress(address);
            setBalance(balance);
          } else {
            throw new Error('Please install MetaMask to use this feature.');
          }
        } catch (error) {
          // Handle errors
          console.error(error);
        }
      };
      async function mintNow(){
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                nftMyAddress,
                MyToken.abi,
                signer
            );
            console.log('contract: ', contract);
            try {
            const responses = await contract.safeMint();
            console.log('responses:', responses); 
          
        
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }
    return (
        <div>
        <div>
<button onClick={connectWallet}>Connect Wallet !</button>
{address && <p>Address Of Wallet that Connected : {address}</p>}
{balance && <p>Balance Of Connected Wallet : {balance}  'ETH'
</p>}
        </div>
        <div>
            <button onClick={mintNow}>Minting Buttun !</button>
        </div>
        </div>
    );
};

export default Home;