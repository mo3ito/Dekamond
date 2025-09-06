// import { create } from "zustand";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// export interface User {
//   name: string;
//   email: string;
//   picture: string;
// }

// interface AuthState {
//   user: User | null;
//   login: (user: User, redirectTo?: string, router?: AppRouterInstance) => void;
//   logout: (redirectTo?: string, router?: AppRouterInstance) => void;
//   setUser: (user: User) => void;
// }

// export const useAuth = create<AuthState>((set) => ({
//   user:
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("user") || "null")
//       : null,

//   login: (user, redirectTo, router) => {
//     localStorage.setItem("user", JSON.stringify(user));
//     set({ user });
//     if (router && redirectTo) router.push(redirectTo);
//   },

//   logout: (redirectTo = "/login", router) => {
//     localStorage.removeItem("user");
//     set({ user: null });
//     if (router) router.push(redirectTo);
//   },

//   setUser: (user) => {
//     localStorage.setItem("user", JSON.stringify(user));
//     set({ user });
//   },
// }));

"use client";

import { create } from "zustand";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect } from "react";

export interface User {
  name: string;
  email: string;
  picture: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  login: (user: User, redirectTo?: string, router?: AppRouterInstance) => void;
  logout: (redirectTo?: string, router?: AppRouterInstance) => void;
  loadUserFromStorage: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

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

  loadUserFromStorage: () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("user");
      if (stored) {
        set({ user: JSON.parse(stored) });
      }
    }
  },
}));


export const useAuthLoad = () => {
  const loadUserFromStorage = useAuth((state) => state.loadUserFromStorage);
  useEffect(() => {
    loadUserFromStorage();
  }, [loadUserFromStorage]);
};
