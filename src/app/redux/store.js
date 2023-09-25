import { configureStore } from "@reduxjs/toolkit";

import transactionsReducer from "../../features/transactions/transactionsSlice";

// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
  reducer: {
    transaction: transactionsReducer,
  },
});

export default store;
