import { createStore } from "redux";
import CategoryReducer from "../reducers/Category";
import  { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(CategoryReducer, composeWithDevTools());

export default store;