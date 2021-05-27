import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ExpenseDetails = (props) => {
  const { expense, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (expense) {
    return (
      <div className="container section expense-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{expense.title}</span>
            <p>{expense.content}</p>s
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {expense.authorFirstName} {expense.authorLastName}
            </div>
            <div>{moment(expense.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading expense...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const expenses = state.firestore.data.expenses;
  const expense = expenses ? expenses[id] : null;
  return {
    expense: expense,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "expenses",
    },
  ])
)(ExpenseDetails);
