import React, { ReactNode, useReducer } from "react";
import tasksReducer from "./reducer/tasksReducer";
import TasksContext from "./contexts/tasksContext";
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
