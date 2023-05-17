import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Initial balance is set to 0
   // Initial transactions array is empty
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      const { amount } = action.payload; // Get the deposit amount from the action payload
      state.balance += amount; // Increase the balance by the deposit amount
      state.transactions.push({
        // Add a new transaction object to the transactions array
        action: "Deposit", // Action type is "Deposit"
        amount, // Deposit amount
        balance: state.balance, // Updated balance after the deposit
      });
    },
    withdrawal: (state, action) => {
      // Get the withdrawal amount from the action payload
       // Decrease the balance by the withdrawal amount
      state.transactions.push({
        // Add a new transaction object to the transactions array
          // Action type is "Withdrawal"
         // Withdrawal amount
         // Updated balance after the withdrawal
      });
    },
    transfer: (state, action) => {
      const { name, amount } = action.payload; // Get the recipient name and transfer amount from the action payload
       // Decrease the balance by the transfer amount
      state.transactions.push({
        // Add a new transaction object to the transactions array
         `Transfer to ${name}`, // Action type is "Transfer to [Recipient Name]"
         // Transfer amount
         // Updated balance after the transfer
      });
    },
  },
});



// Exporting the deposit, withdrawal, and transfer actions from the accountSlice


// Exporting the accountSlice.reducer as the default export
