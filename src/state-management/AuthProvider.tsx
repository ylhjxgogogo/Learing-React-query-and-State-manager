import React, { ReactNode, useReducer } from "react";
import loginReducer from "./reducer/loginReducer";
import LoginContext from "./contexts/loginContext";
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
