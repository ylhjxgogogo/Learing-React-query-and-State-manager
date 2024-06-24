import { useContext, useReducer } from "react";
import loginReducer from "./reducer/loginReducer";
import LoginContext from "./contexts/loginContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(LoginContext);
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
