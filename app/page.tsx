import getMetaData from "@/lib/seo/getMetaData";
import HomeMain from "@/components/home/HomeMain";

export const metadata = getMetaData(
  "خانه | دکاموند",
  "ارائه‌دهنده خدمات نوین در حوزه هوش مصنوعی با رویکرد کیفیت و اعتماد."
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <HomeMain />
    </div>
  );
}
