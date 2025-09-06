import Link from "next/link";
import { AUTH_ROUTES } from "@/lib/paths/auth";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
          DEKAMOND
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-2">
          خوش آمدید!
        </h2>

        <p className="text-gray-300 text-sm sm:text-xl max-w-lg">
          به دکاموند، پلتفرم مدرن و حرفه‌ای ما خوش آمدید.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href={AUTH_ROUTES.login}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            ورود
          </Link>
          <Link
            href={AUTH_ROUTES.dashboard}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            مشاهده داشبورد
          </Link>
        </div>
      </main>

      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[url('/stars.svg')] bg-cover bg-center opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
}
