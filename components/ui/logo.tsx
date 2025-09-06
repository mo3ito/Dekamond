import { HOME_ROUTE } from "@/lib/paths/auth";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={HOME_ROUTE}
      className="text-white font-bold text-xl sm:text-2xl"
    >
      DEKAMOND
    </Link>
  );
}
