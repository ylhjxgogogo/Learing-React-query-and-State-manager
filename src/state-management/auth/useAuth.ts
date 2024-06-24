import { useContext } from "react";
import LoginContext from "../auth/loginContext";
const useAuth = () => {
  return useContext(LoginContext);
};
export default useAuth;
