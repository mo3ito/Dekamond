import Dashboard from "@/components/dashboard/Dashboard";
import StarryBackground from "@/components/dashboard/StarryBackground";
import getMetaData from "@/lib/seo/getMetaData";

export const metadata = getMetaData(
  "داشبورد کاربری",
  "صفحه داشبورد و اطلاعات کاربر"
);

export default function page() {
  return (
    <>
      <Dashboard />;
    </>
  );
}
