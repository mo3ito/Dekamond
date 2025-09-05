"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Label from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas/loginSchema";
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const loginMutation = useLogin();

  const onSubmit = () => {
    loginMutation.mutate();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
          loginMutation.isPending ? "opacity-70 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
      >
        {loginMutation.isPending ? "در حال ورود..." : "ورود"}
      </Button>
    </form>
  );
}
