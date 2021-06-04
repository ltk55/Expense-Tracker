import authReducer from "./authReducer";
import expenseReducer from "./expenseReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  expense: expenseReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
