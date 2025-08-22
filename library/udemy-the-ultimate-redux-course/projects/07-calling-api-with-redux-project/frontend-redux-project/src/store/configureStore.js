import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import api from "./middleware/api";
import error from "./middleware/error";
import tasksReducer from "./tasks";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api, error),
});

export default store;
