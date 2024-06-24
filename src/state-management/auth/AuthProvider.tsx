import { ReactNode, useReducer } from "react";
import LoginContext from "./loginContext";
export type UserAction = Login | Logout;
type Login = {
  type: "LOGIN_IN";
  username: string;
};
type Logout = {
  type: "LOGIN_OUT";
};
const loginReducer = (state: string, action: UserAction) => {
  switch (action.type) {
    case "LOGIN_IN":
      return action.username;
    case "LOGIN_OUT":
      return "";
    default:
      return state;
  }
};
interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");
  return (
    <LoginContext.Provider value={{ user, dispatch }}>
      {children}{" "}
    </LoginContext.Provider>
  );
};

export default AuthProvider;
