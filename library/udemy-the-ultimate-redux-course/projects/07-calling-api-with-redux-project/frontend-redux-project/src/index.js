import store from "./store/configureStore";
import { fetchTasks } from "./store/tasks";

// const gettingTasks = async () => {
//   try {
//     // calling api
//     const response = await axios.get("http://localhost:5000/api/tasks");
//     console.log(response);

//     // dispatch action
//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (error) {
//     store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
//   }
// };

// gettingTasks();

store.dispatch(fetchTasks());
