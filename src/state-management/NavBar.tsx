import LoginStatus from "./LoginStatus";

const NavBar = () => {
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary"></span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
function useTasks(): { tasks: any } {
  throw new Error("Function not implemented.");
}
