import React from "react";

export default function MobileHeader() {
  return (
    <header className="w-full fixed top-0 inset-x-0 block lg:hidden bg-white/5 h-16  items-center justify-center z-50">
      <div className="size-full flex items-center justify-between">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-zinc-200"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
