"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/stores/useAuth";
import { AUTH_ROUTES, HOME_ROUTE } from "@/lib/paths/auth";
import useIsClient from "@/hooks/useIsClient";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const isClient = useIsClient();
  useEffect(() => {
    if (!user) {
      router.push(AUTH_ROUTES.login);
    }
  }, [user]);

  if (!isClient || !user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/5 border border-white/20 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center gap-6 transition-transform hover:scale-[1.02]">
        <div className="relative w-28 h-28 rounded-full border-4 border-indigo-500 overflow-hidden shadow-lg">
          <Image
            src={user.picture}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            خوش آمدید، {user.name}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">{user.email}</p>
        </div>

        <button
          onClick={() => logout(AUTH_ROUTES.login, router)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300"
        >
          خروج
        </button>

        <p className="text-gray-400 text-xs text-center mt-4 sm:text-sm">
          شما وارد داشبورد خود شده‌اید. از امکانات سایت استفاده کنید.
        </p>
      </div>
    </div>
  );
}
