import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import Counter from "./state-management/counter/Counter";
function App() {
  return (
    <>
      <Counter />
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
