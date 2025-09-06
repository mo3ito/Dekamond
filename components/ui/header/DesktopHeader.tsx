import Link from "next/link";
import { menuLinks } from "@/lib/paths/menu";
import Logo from "../logo";

export default function DesktopHeader() {
  return (
    <header className="w-full fixed top-0 left-0 bg-white/5 backdrop-blur-md shadow-md z-50 border-b border-white/10 hidden lg:block">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <ul className="flex items-center gap-6">
          {menuLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="link-underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Logo />
      </nav>
    </header>
  );
}
