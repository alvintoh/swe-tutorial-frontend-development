import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../store/tasks";

export const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  console.log(tasks);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <p key={task.id}>{task.task}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Tasks;
