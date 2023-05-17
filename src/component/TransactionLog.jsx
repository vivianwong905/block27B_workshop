import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './transactionLog.css'; // Import your custom CSS file

const TransactionLog = () => {
  const transactions = useSelector(state => state.account.transactions); // Get the transactions from the Redux store
  const [isOpen, setIsOpen] = useState(false); // State variable to track whether the log is open or closed

  const handleToggleDropdown = () => {
     // Toggle the isOpen state value when the button is clicked
  };

  return (
    <div className="transaction-log-container">
      
    </div>
  );
};

export default TransactionLog;
