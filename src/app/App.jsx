import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";
import store from "./redux/store"
import { Provider } from "react-redux";
// provider needs to wrap around the ENTIRE application so we have access to everywhere
import React from "react";

import "./app.css";

// TODO: Import the Redux store and provide it to this component using <Provider>.
const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </main>
    </Provider>
  );
};

export default App;
