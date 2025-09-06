import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface UserInfo {
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
}

export interface RandomUserResponse {
  results: UserInfo[];
}

export interface User {
  name: string;
  email: string;
  picture: string;
}

export interface AuthState {
  user: User | null;
  login: (user: User, redirectTo?: string, router?: AppRouterInstance) => void;
  logout: (redirectTo?: string, router?: AppRouterInstance) => void;
  setUser: (user: User) => void;
}
