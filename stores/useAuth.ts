"use client";
import { create } from "zustand";
import { AuthState } from "@/types/authTypes";

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
