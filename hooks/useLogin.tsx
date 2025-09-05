"use client";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/lib/apis/auth";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          picture: user.picture.thumbnail,
        })
      );
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
