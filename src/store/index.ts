// src/store/index.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State  {
  isAuthenticated: boolean;
  userRole: string;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<State>(
  persist(
    (set) => ({
      isAuthenticated: false,
      userRole: "",
      login: () => set({ isAuthenticated: true, userRole: "admin" }),
      logout: () => set({ isAuthenticated: false, userRole: "" }),
    }),
    {
      name: "auth-storage", // name of the item in the storage (must be unique)\
    }
  ) as any
);
