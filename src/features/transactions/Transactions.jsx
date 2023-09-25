import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBalance,
  deposit,
  withdrawal,
  transfer,
} from "./transactionsSlice";

import "./transactions.scss";

/**
 * Allows users to deposit to, withdraw from, and transfer money from their account.
 */
export default function Transactions() {
  // TODO: Dispatch the appropriate transaction action based on `action`
  const dispatch = useDispatch();
  // TODO: Get the balance from the Redux store using the useSelector hook
  const balance = useSelector(selectBalance); // from line 62 transactionSlice.js

  const [amountStr, setAmountStr] = useState("0.00");

  /** Dispatches a transaction action based on the form submission. */
  const onTransaction = (e) => {
    e.preventDefault();

    // This changes depending on which button the user clicked to submit the form.
    // It will be either "deposit", "withdraw", or "transfer".
    const action = e.nativeEvent.submitter.name;

    const amount = +amountStr;
    if (action === "deposit") {
      dispatch(deposit({ amount }));
    } else if (action === "withdraw") {
      dispatch(withdrawal({ amount }));
    } else if (action === "transfer") {
      const recipient = e.target.elements["recipient"].value;
      dispatch(transfer({ amount, name: recipient }));
    }
    setAmountStr("0.00");
  };

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong>
      </figure>
      <form onSubmit={onTransaction}>
        <div className="form-row">
          <label>
            Amount
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={amountStr}
              onChange={(e) => setAmountStr(e.target.value)}
            />
          </label>
          <div>
            <button default name="deposit">
              Deposit
            </button>
            <button name="withdraw">Withdraw</button>
          </div>
        </div>
        <div className="form-row">
          <label>
            Transfer to
            <input type="text" placeholder="Recipient Name" name="recipient" />
          </label>
          <button name="transfer">Transfer</button>
        </div>
      </form>
    </section>
  );
}
