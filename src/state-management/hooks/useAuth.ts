import { useContext } from "react";
import LoginContext from "../contexts/loginContext";
const useAuth = () => {
  return useContext(LoginContext);
};
export default useAuth;
