"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/stores/useAuth";
import { AUTH_ROUTES } from "@/lib/paths/auth";
import useIsClient from "@/hooks/useIsClient";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import LoadingPage from "../ui/LoadingPage";
import OperationModal from "../Modal/OperationModal";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const isClient = useIsClient();
  const [isShowModalLogout, setIsShowModalLogout] = useState<boolean>(false);
  useEffect(() => {
    if (!user) {
      router.push(AUTH_ROUTES.login);
    }
  }, [user, router]);

  if (!isClient || !user) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/5 border border-white/20 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center gap-6 transition-transform hover:scale-[1.02]">
        <div className="relative size-28 rounded-full border-4 border-indigo-500 overflow-hidden shadow-lg">
          <img
            src={user.picture}
            alt={user.name}
            className="object-cover size-full"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            خوش آمدید، {user.name}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">{user.email}</p>
        </div>

        <Button
          onClick={() => setIsShowModalLogout(true)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300"
          aria-label="خروج"
        >
          خروج
        </Button>

        <p className="text-gray-400 text-xs text-center mt-4 sm:text-sm">
          شما وارد داشبورد خود شده‌اید. از امکانات سایت استفاده کنید.
        </p>
      </div>
      <OperationModal
        isShowModal={isShowModalLogout}
        onSetShowModal={(value) => setIsShowModalLogout(value)}
        content={"آیا از خروج اطمینان دارید؟"}
        confirmeHandler={() => logout(AUTH_ROUTES.login, router)}
      />
    </div>
  );
}
