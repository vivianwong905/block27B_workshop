import "./transactionHistory.scss";
import { useSelector } from "react-redux";
import {
  selectHistory,
} from "./transactionsSlice";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  const history = useSelector(selectHistory); // from line 63 transactionSlice.js
console.log(history, "history");
  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO
          Map over the transactions in `history`
          to render the appropriate `TransactionRow`s
          */}
          {history.map((transaction) => {
            return (
              <TransactionRow
                key={transaction.type}
                transaction={transaction}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}