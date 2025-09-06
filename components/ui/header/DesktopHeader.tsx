import { AUTH_ROUTES, HOME_ROUTE } from "@/lib/paths/auth";
import Link from "next/link";
import React from "react";

export default function DesktopHeader() {
  return (
    <header className="w-full fixed top-0 left-0 bg-white/5 backdrop-blur-md shadow-md z-50 border-b border-white/10 hidden lg:block">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <ul className="flex items-center gap-6">
          <li>
            <Link href={AUTH_ROUTES.login} className="link-underline">
              ورود
            </Link>
          </li>
          <li>
            <Link href={AUTH_ROUTES.dashboard} className="link-underline">
              داشبورد
            </Link>
          </li>
        </ul>
        <Link
          href={HOME_ROUTE}
          className="text-white font-bold text-xl sm:text-2xl"
        >
          DEKAMOND
        </Link>
      </nav>
    </header>
  );
}
