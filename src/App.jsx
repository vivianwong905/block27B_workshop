import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdrawal, transfer } from './redux/accountSlice';
import TransactionLog from './component/TransactionLog';
import './App.css'; // Import your custom CSS file

const App = () => {
  // State variables for input fields
  const [depositAmount, setDepositAmount] = useState(0); // Track deposit amount entered by the user
  const [withdrawalAmount, setWithdrawalAmount] = useState(0); // Track withdrawal amount entered by the user
  const [transferName, setTransferName] = useState(''); // Track recipient name entered by the user for transfer
  const [transferAmount, setTransferAmount] = useState(0); // Track transfer amount entered by the user

  // Accessing balance from the Redux store
  const balance = useSelector(state => state.account.balance); // Get current balance from the Redux store
  const dispatch = useDispatch();

  // Event handler for deposit action
  const handleDeposit = () => {
    dispatch(deposit({ amount: Number(depositAmount) })); // Dispatch deposit action with the entered deposit amount
    setDepositAmount(0); // Reset deposit amount after deposit action is dispatched
  };

  // Event handler for withdrawal action
  const handleWithdrawal = () => {
  // ***TODO***
    // Dispatch withdrawal action with the entered withdrawal amount
     // Reset withdrawal amount after withdrawal action is dispatched
  };

  // Event handler for transfer action
  const handleTransfer = () => {
     // ***TODO***
     // Dispatch transfer action with the entered recipient name and transfer amount
     // Reset recipient name after transfer action is dispatched
     // Reset transfer amount after transfer action is dispatched
  };

  return (
    <div className="app-container">
    
    </div>
  );
};

export default App;
