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
export default loginReducer;
