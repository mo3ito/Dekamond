import * as React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-sm font-medium text-gray-300", className)}
      {...props}
    />
  );
}
