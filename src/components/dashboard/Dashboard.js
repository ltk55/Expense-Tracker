import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import MonthSelect from "../expenses/MonthSelect";
import ExpenseTable from "../expenses/ExpenseTable";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth().toString(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(month) {
    this.setState({
      month,
    });
  }

  render() {
    const { expenses, auth, profile } = this.props;
    let noData = true;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (expenses !== undefined) {
      var filteredExpense = expenses.filter((exp) => {
        let TransactionMonth = exp.date.split("-");
        TransactionMonth = parseInt(TransactionMonth[1], 0).toString();
        return TransactionMonth === this.state.month;
      });
    }

    if (filteredExpense !== undefined && filteredExpense.length > 0) {
      noData = false;
    }

    return (
      <div className="dashboard container">
        <h1>
          Hello {profile.firstName} {profile.lastName}
        </h1>
        <MonthSelect onChange={this.handleChange} month={this.state.month} />
        {noData ? (
          <div>No Data</div>
        ) : (
          <div>
            <ExpenseTable expenses={filteredExpense} month={this.state.month} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.firestore.ordered.expenses,
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "expenses", orderBy: ["date", "desc"] }])
)(Dashboard);
