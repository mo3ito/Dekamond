"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Label from "@/components/ui/label";
import { API_URLS } from "@/lib/apis/urls";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas/loginSchema";
import { apiClient } from "@/lib/apis/client";
import { useMutation } from "@tanstack/react-query";

interface RandomUserResponse {
  results: {
    name: { first: string; last: string };
    email: string;
    picture: { thumbnail: string };
  }[];
}
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      const data = await apiClient.get<RandomUserResponse>(API_URLS.randomUser);
      return data.results[0];
    },
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

  const loginSubmit = () => {
    mutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E]">
      <div className="bg-white/5 p-10 rounded-2xl shadow-lg w-full max-w-sm flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          ورود به حساب کاربری
        </h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(loginSubmit)}
        >
          <Label htmlFor="phone" className="text-gray-300">
            شماره موبایل
          </Label>
          <Input
            id="phone"
            placeholder="09xxxxxxxxx"
            {...register("phone")}
            className="border-gray-700 bg-gray-800 text-white focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="text-red-500 text-sm ">{errors.phone?.message}</p>
          <Button
            type="submit"
            className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all ${
              mutation.isPending ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {mutation.isPending ? "در حال ورود..." : "ورود"}
          </Button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-2">
          ورود سریع و امن با شماره موبایل شما
        </p>
      </div>
    </div>
  );
}
