"use client";
import React, { useRef, useEffect } from "react";
import useDropDown from "@/hooks/useDropDown";
import clsx from "clsx";
import { createPortal } from "react-dom";
import useIsClient from "@/hooks/useIsClient";
import { Button } from "../ui/button";
import CloseIcon from "../svgs/CloseIcon";
import { OperationModalProps } from "@/types/modalTypes";

export default function OperationModal({
  isShowModal,
  confirmeHandler,
  onSetShowModal,
  content,
}: OperationModalProps) {
  const isClient = useIsClient();
  const containerRefModal = useRef<HTMLDivElement | null>(null);
  const closeHandler = () => onSetShowModal(false);
  useDropDown(containerRefModal, isShowModal, closeHandler);
  useEffect(() => {
    if (!isClient) return;

    if (isShowModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isShowModal, isClient]);

  if (!isClient) {
    return null;
  }

  return createPortal(
    <div
      className={clsx(
        isShowModal ? "visible opacity-100" : "invisible opacity-0",
        "w-full h-screen text-zinc-700 font-bold inset-0 bg-black/70 flex items-center justify-center fixed transform transition duration-300 ease-in z-50 px-4"
      )}
    >
      <div
        ref={containerRefModal}
        className="bg-zinc-300 min-w-[256px] h-max rounded-lg relative flex items-center justify-center p-4 "
      >
        <Button
          onClick={closeHandler}
          aria-label="بستن مدال"
          className="absolute top-2 right-2 "
        >
          <CloseIcon className=" fill-red-500" />
        </Button>

        <div className="text-center text-sm w-full">
          <h4 className="  mb-6 pt-6 text-base">{content}</h4>
          <div className="flex items-center justify-center w-full gap-x-2 font-bold text-sm text-black">
            <Button
              onClick={confirmeHandler}
              className=" w-28 h-8 sm:w-44 sm:h-12 bg-indigo-500 hover:bg-indigo-600 text-lg"
            >
              بله
            </Button>
            <Button
              onClick={closeHandler}
              className=" w-28 h-8 sm:w-44 sm:h-12 bg-red-600 hover:bg-red-700 text-lg"
            >
              خیر
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
