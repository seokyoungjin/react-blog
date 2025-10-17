import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface User {
  _id: string;
  kakaoId: string;
  profileImage: string;
  nickname: string;
  email?: string;
}

interface AuthStore {
  isLogin: boolean;
  user: User | null;
  setUserData: (userData: User) => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    immer((set) => ({
      isLogin: false,
      user: null,
      setUserData: (userData) =>
        set((state) => {
          state.isLogin = true;
          state.user = userData;
        }),
    }))
  )
);
