import { Link, Outlet } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item" key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default UserList;
