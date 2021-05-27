export const createExpense = (expense) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("expenses")
      .add({
        ...expense,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_EXPENSE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_EXPENSE_ERROR" }, err);
      });
  };
};
