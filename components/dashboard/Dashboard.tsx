"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{
    name: string;
    email: string;
    picture: string;
  } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.push("/login");
    } else {
      setUser(JSON.parse(stored));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className=" bg-white/5 border border-white/20 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center gap-6 transition-transform hover:scale-[1.02]">
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
          onClick={handleLogout}
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
