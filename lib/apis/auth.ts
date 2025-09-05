import { apiClient } from "./client";
import { API_URLS } from "./urls";

interface RandomUserResponse {
  results: {
    name: { first: string; last: string };
    email: string;
    picture: { thumbnail: string };
  }[];
}

export const loginApi = async () => {
  const data = await apiClient.get<RandomUserResponse>(API_URLS.randomUser);
  return data.results[0];
};
