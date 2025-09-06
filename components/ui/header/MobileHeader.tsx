"use client";
import { HOME_ROUTE } from "@/lib/paths/auth";
import Link from "next/link";
import { Button } from "../button";
import { useState } from "react";
import MenuIcon from "@/components/svgs/MenuIcon";
import clsx from "clsx";
import { menuLinks } from "@/lib/paths/menu";
import CloseIcon from "@/components/svgs/CloseIcon";
import Logo from "../logo";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 inset-x-0 block lg:hidden bg-white/5 h-16  items-center justify-center z-50 px-6">
      <div className="size-full flex items-center justify-between">
        <Button onClick={() => setOpen(true)} aria-label="باز کردن منو">
          <MenuIcon />
        </Button>
        <Logo />
      </div>
      <div
        className={clsx(
          "fixed inset-0 bg-gray-900 z-40 transform transition-transform duration-300 flex flex-col items-center justify-center gap-8",
          {
            "translate-y-0": open,
            "translate-y-full": !open,
          }
        )}
      >
        <Button
          onClick={() => setOpen(false)}
          aria-label="بستن منو"
          className="absolute top-6 right-6 text-white"
        >
          <CloseIcon />
        </Button>

        <nav className="flex flex-col  gap-6 h-full absolute top-24 right-10">
          <ul className="flex flex-col gap-6 text-right text-xl">
            {menuLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-white  font-semibold hover:text-indigo-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
