import React from "react";
import { type TaskAction, type Task } from "../reducer/tasksReducer";
interface TasksContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}
const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);
export default TasksContext;
