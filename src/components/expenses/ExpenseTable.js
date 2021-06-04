import React from "react";
import ExpenseRow from "./ExpenseRow";

const ExpenseTable = (props) => {
  let totalAmount = 0;

  for (const exp of props.expenses) {
    totalAmount += Number(exp.amount);
  }

  return (
    <div>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses && (
            <ExpenseRow
              expenses={props.expenses}
              key={props.expenses.id}
              month={props.month}
            />
          )}
        </tbody>
      </table>
      <div>{totalAmount}</div>
    </div>
  );
};

export default ExpenseTable;
