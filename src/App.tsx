import "./App.css";
import { useReducer } from "react";
import tasksReducer from "./state-management/reducer/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import loginReducer from "./state-management/reducer/loginReducer";
import LoginContext from "./state-management/contexts/loginContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [user, userDispatch] = useReducer(loginReducer, "");
  return (
    <LoginContext.Provider value={{ user, dispatch: userDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
