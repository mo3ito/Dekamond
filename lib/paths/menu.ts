import { AUTH_ROUTES, HOME_ROUTE } from "./auth";
import { v4 as uuidv4 } from "uuid";

export const menuLinks = [
  { id: uuidv4(), label: "خانه", href: HOME_ROUTE },
  { id: uuidv4(), label: "ورود", href: AUTH_ROUTES.login },
  { id: uuidv4(), label: "داشبورد", href: AUTH_ROUTES.dashboard },
];
