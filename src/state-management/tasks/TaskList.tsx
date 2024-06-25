import useAuthStore from "../auth/authStore";
import useAuth from "../auth/useAuth";
import useTaskStore from "./taskStore";

const TaskList = () => {
  const { user } = useAuthStore();
  const { tasks, addTask, deleteTask } = useTaskStore();
  return (
    <>
      <p>User:{user}</p>
      <button
        onClick={() => addTask({ id: Date.now(), title: "Task " + Date.now() })}
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTask(task?.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
