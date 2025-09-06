import { create } from "zustand";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface User {
  name: string;
  email: string;
  picture: string;
}

interface AuthState {
  user: User | null;
  login: (user: User, redirectTo?: string, router?: AppRouterInstance) => void;
  logout: (redirectTo?: string, router?: AppRouterInstance) => void;
  setUser: (user: User) => void;
}

export const useAuth = create<AuthState>((set) => ({
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null,

  login: (user, redirectTo, router) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
    if (router && redirectTo) router.push(redirectTo);
  },

  logout: (redirectTo = "/login", router) => {
    localStorage.removeItem("user");
    set({ user: null });
    if (router) router.push(redirectTo);
  },

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
}));
