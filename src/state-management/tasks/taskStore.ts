import { create } from "zustand";
import { Task } from "./TasksProvider";
interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}
const useTaskStore = create<TaskStore>((set) => {
  return {
    tasks: [],
    addTask: (task) => set((store) => ({ tasks: [...store.tasks, task] })),
    deleteTask: (id) =>
      set((store) => ({ tasks: store.tasks.filter((t) => t.id !== id) })),
  };
});
export default useTaskStore;
