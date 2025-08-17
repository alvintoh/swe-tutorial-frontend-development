import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./tasks";

const composeEnhancers = composeWithDevTools({
  trace: true,
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
