import React from "react";
import { UserAction } from "./AuthProvider";

interface LoginContextType {
  user: string;
  dispatch: React.Dispatch<UserAction>;
}
const LoginContext = React.createContext<LoginContextType>(
  {} as LoginContextType
);
export default LoginContext;
