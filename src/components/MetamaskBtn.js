import React, { useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';

const MetamaskBtn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

    const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsLoggedIn(true);
        navigate('/upload');
      } else if (window.web3) {
        window.web3.currentProvider.enable();
        setIsLoggedIn(true);
        navigate('/upload');
      } else {
        alert('Please install MetaMask to use this feature!');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Logged in to Metamask!</p>
      ) : (
        <button className="btn btn-primary btn-md" type="button" onClick={connectToMetaMask}>
          <i className="fa-brands fa-ethereum "></i>
          &nbsp;&nbsp;Connect to MetaMask
          </button>
      )}
    </div>
  );
};

export default MetamaskBtn;
