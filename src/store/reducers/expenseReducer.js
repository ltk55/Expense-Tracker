const initState = {};

const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_EXPENSE_SUCCESS":
      console.log("create expense success");
      return state;
    case "CREATE_EXPENSE_ERROR":
      console.log("create expense error");
      return state;
    default:
      return state;
  }
};

export default expenseReducer;
