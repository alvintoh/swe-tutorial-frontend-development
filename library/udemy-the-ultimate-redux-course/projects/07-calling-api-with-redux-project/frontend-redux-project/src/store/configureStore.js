import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import employeeReducer from "./employees";
import error from "./middleware/error";
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
