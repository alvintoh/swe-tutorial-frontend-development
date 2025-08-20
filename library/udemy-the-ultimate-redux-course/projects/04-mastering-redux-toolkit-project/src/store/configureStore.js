import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import tasksReducer from "./tasks";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    employees: employeeReducer,
  },
});

export default store;
