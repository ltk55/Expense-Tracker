import React, { Component } from "react";
import { connect } from "react-redux";
import { createExpense } from "../../store/actions/expenseActions";
import { Redirect } from "react-router-dom";
import M from "materialize-css";
import $ from "jquery";

class CreateExpense extends Component {
  state = {
    date: new Date(),
    category: "",
    note: "",
    amount: 0,
  };

  componentDidMount() {
    // M.AutoInit();
    M.FormSelect.init($("select"), {});
    // M.Datepicker.init($(".datepicker"), {});
  }

  handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createExpense(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Expense</h5>
          <div className="input-field">
            <input
              type="date"
              className="datepicker"
              id="date"
              onChange={this.handleChange}
            ></input>
            <label>Transaction Date</label>
          </div>
          <div className="input-field">
            <select id="category" onChange={this.handleChange}>
              <option value="food">Food & Beverage</option>
              <option value="transport">Transportation</option>
              <option value="entertainment">Entertainment</option>
              <option value="shop">Shopping</option>
              <option value="other">Other Expense</option>
            </select>
            <label>Select Category</label>
          </div>
          <div className="input-field">
            <input type="text" id="note" onChange={this.handleChange} />
            <label htmlFor="title">Note</label>
          </div>
          <div className="input-field">
            <input type="number" id="amount" onChange={this.handleChange} />
            <label htmlFor="title">Amount</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createExpense: (expense) => dispatch(createExpense(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateExpense);
