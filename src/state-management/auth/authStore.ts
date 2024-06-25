import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}
const useAuthStore = create<AuthStore>((set) => {
  return {
    user: "",
    login: (username) => set((store) => ({ user: username })),
    logout: () => set(() => ({ user: "" })),
  };
});
export default useAuthStore;
