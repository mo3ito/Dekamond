"use client";
import { RefObject, useEffect } from "react";

const useDropDown = (
  refName: RefObject<HTMLDivElement | HTMLElement | null>,
  stateName: boolean,
  closeHandler: () => void
) => {
  useEffect(() => {
    const dropDownHandler = (event: MouseEvent) => {
      if (
        refName.current &&
        stateName &&
        !refName.current.contains(event.target as Node)
      ) {
        closeHandler();
      }
    };

    document.addEventListener("mousedown", dropDownHandler);

    return () => {
      document.removeEventListener("mousedown", dropDownHandler);
    };
  }, [refName, stateName, closeHandler]);
};

export default useDropDown;