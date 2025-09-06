import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/apis/client";
import { API_URLS } from "@/lib/apis/urls";
import { useAuth } from "@/stores/useAuth";
import { AxiosError } from "axios";
import { AUTH_ROUTES } from "@/lib/paths/auth";

interface UserInfo {
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
}

interface RandomUserResponse {
  results: UserInfo[];
}

export function useLoginHandler() {
  const login = useAuth((state) => state.login);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const data = await apiClient.get<RandomUserResponse>(API_URLS.randomUser);
      const user = data.results[0];

      const mappedUser = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        picture: user.picture.thumbnail,
      };
      login(mappedUser, AUTH_ROUTES.dashboard, router);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        alert(error.response?.data?.message || "خطا در ارتباط با سرور");
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("خطای ناشناخته رخ داد");
      }
    }
  };

  return { handleLogin };
}
