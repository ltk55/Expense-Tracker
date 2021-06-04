import React from "react";
import { connect } from "react-redux";
import { deleteExpense } from "../../store/actions/expenseActions";

const ExpenseRow = (props) => {
  const deleteExpense = (event) => {
    event.preventDefault();
    const rowId = event.target.parentNode.parentNode.id;
    props.deleteExpense(props.expenses[rowId].id);
  };

  return (
    <React.Fragment>
      {props.expenses.map((expense, index) => (
        <tr key={index} id={index}>
          <td>{expense.date}</td>
          <td>{expense.category}</td>
          <td>{expense.amount}</td>
          <td>{expense.note}</td>
          <td>
            <button onClick={deleteExpense}>delete</button>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteExpense: (expense) => dispatch(deleteExpense(expense)),
  };
};

export default connect(null, mapDispatchToProps)(ExpenseRow);
