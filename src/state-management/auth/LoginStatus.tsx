import useAuth from "./useAuth";
const LoginStatus = () => {
  const { user, dispatch } = useAuth();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGIN_OUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatch({ type: "LOGIN_IN", username: "mosh.hamedani" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
