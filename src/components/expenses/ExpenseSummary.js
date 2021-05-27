import React from "react";
import moment from "moment";

const ExpenseSummary = ({ expense }) => {
  return (
    <div className="card z-depth-0 expense-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{expense.title}</span>
        <p>
          Posted by {expense.authorFirstName} {expense.authorLastName}
        </p>
        <p className="grey-text">
          {moment(expense.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ExpenseSummary;
