import clsx from "clsx";
import React from "react";
import { Button } from "../button";
import CloseIcon from "@/components/svgs/CloseIcon";
import { menuLinks } from "@/lib/paths/menu";
import Link from "next/link";

interface MobileMenuNavProps {
  onSetOpen: (value: boolean) => unknown;
  open:boolean
}

export default function MobileMenuNav({ onSetOpen , open }: MobileMenuNavProps) {
  return (
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
        onClick={() => onSetOpen(false)}
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
                onClick={() => onSetOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
