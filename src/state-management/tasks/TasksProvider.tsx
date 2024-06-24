import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";
export interface Task {
  id: number;
  title: string;
}
interface AddTask {
  type: "ADD";
  task: Task;
}
interface DeleteTask {
  type: "DELETE";
  taskId: number;
}
export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (state: Task[], action: TaskAction) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.task];
    }
    case "DELETE": {
      return state.filter((t) => t.id !== action.taskId);
    }
  }
};

interface Props {
  children: ReactNode;
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
