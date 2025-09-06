"use client";
import { Button } from "../button";
import { useState } from "react";
import MenuIcon from "@/components/svgs/MenuIcon";
import Logo from "../logo";
import MobileMenuNav from "./MobileMenuNav";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 inset-x-0 block lg:hidden bg-white/5 h-16 items-center justify-center z-50 px-6">
      <div className="size-full flex items-center justify-between">
        <Button onClick={() => setOpen(true)} aria-label="باز کردن منو">
          <MenuIcon />
        </Button>
        <Logo />
      </div>
      <MobileMenuNav onSetOpen={(value) => setOpen(value)} open={open} />
    </header>
  );
}
