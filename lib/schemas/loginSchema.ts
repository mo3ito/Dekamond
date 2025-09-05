import { z } from "zod";
import { isValidIranMobile } from "../validators";

export const loginSchema = z.object({
  phone: z
    .string()
    .min(1, "شماره موبایل وارد نشده است")
    .refine(isValidIranMobile, {
      message: "شماره موبایل معتبر نیست",
    }),
});
