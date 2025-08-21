import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import error from "../middleware/error";
import employeeReducer from "./employees";
import tasksReducer from "./tasks";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, error),
});

export default store;
