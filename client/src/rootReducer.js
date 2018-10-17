import { combineReducers } from "redux";
import books from "./Components/Booklist/reducer";

const rootReducer = combineReducers({
  books
});

export default rootReducer;
