import { applyMiddleware, legacy_createStore as createsStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./tasks";

const store = createsStore(reducer, applyMiddleware(thunk));

export default store;
