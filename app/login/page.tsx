import LoginForm from "@/components/forms/LoginForm";
import getMetaData from "@/lib/seo/getMetaData";

export const metadata = getMetaData(
  "ورود به حساب کاربری",
  "صفحه ورود کاربران به سیستم"
);

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="bg-white/5 p-10 rounded-2xl shadow-lg w-full max-w-sm flex flex-col gap-6 border border-white/20">
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          ورود به حساب کاربری
        </h1>
        <LoginForm />
        <p className="text-center text-gray-400 text-sm mt-2">
          ورود سریع و امن با شماره موبایل شما
        </p>
      </div>
    </div>
  );
}
