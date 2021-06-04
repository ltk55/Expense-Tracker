import React, { useEffect } from "react";
import M from "materialize-css";
import $ from "jquery";

const MonthSelect = (props) => {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  useEffect(() => {
    M.FormSelect.init($("select"), {});
  }, null);

  return (
    <div className="input-field">
      <select id="month" onChange={handleChange} defaultValue={props.month}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      {/* <label>choose a month</label> */}
    </div>
  );
};

export default MonthSelect;
