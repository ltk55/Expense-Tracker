export const createExpense = (expense) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("expenses")
      .add({
        ...expense,
        userFirstName: profile.firstName,
        userLastName: profile.lastName,
        userId: userId,
        // createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_EXPENSE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_EXPENSE_ERROR" }, err);
      });
  };
};

export const deleteExpense = (expense) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("expenses")
      .doc(expense)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_EXPENSE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_EXPENSE_ERROR" }, err);
      });
  };
};
