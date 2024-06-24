import { useContext } from "react";
import TasksContext from "./tasksContext";
const useTasks = () => {
  return useContext(TasksContext);
};
export default useTasks;
