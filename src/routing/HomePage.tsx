import { Link } from "react-router-dom";

const HomePage = () => {
  // throw new Error("unexpected error");
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to="/users">Users</Link>
      <hr />
      <Link to="/contact">Contact</Link>
    </>
  );
};

export default HomePage;
