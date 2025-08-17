import store from "./store/configureStore";
import { addTask, completeTask, fetchTodo, removeTask } from "./store/tasks";

const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});

store.dispatch(addTask("TASK 1"));
store.dispatch(addTask("TASK 2"));
console.log(store.getState());

// unsubscribe();
store.dispatch(completeTask(2));

store.dispatch(removeTask(1));
store.dispatch(fetchTodo());
console.log(store.getState());
