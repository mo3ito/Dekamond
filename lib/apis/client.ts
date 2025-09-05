import axios, { AxiosError, AxiosProgressEvent } from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
};

interface RequestOptions {
  authorization?: string;
  onProgress?: (progress: number) => void;
}

async function handleRequest<T>(
  request: () => Promise<{ data: T }>
): Promise<T> {
  try {
    const data = await request();
    return data.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      console.error("Request failed with status:", error.response.status);
      console.error("Response data:", error.response.data);
      throw new Error(error.response.data.message || "Request failed");
    }
    throw new Error("An unknown error occurred");
  }
}

export const apiClient = {
  get: async <T>(url: string, options?: RequestOptions): Promise<T> =>
    handleRequest(() =>
      axios.get<T>(url, {
        headers: {
          ...defaultHeaders,
          ...(options?.authorization
            ? { Authorization: `Bearer ${options.authorization}` }
            : {}),
        },
        onDownloadProgress: (e: AxiosProgressEvent) => {
          if (e.total && options?.onProgress) {
            options.onProgress(Math.round((e.loaded * 100) / e.total));
          }
        },
      })
    ),

  post: async <T>(
    url: string,
    payload?: any,
    options?: RequestOptions
  ): Promise<T> =>
    handleRequest(() =>
      axios.post<T>(url, payload, {
        headers: {
          ...defaultHeaders,
          ...(options?.authorization
            ? { Authorization: `Bearer ${options.authorization}` }
            : {}),
        },
        onUploadProgress: (e: AxiosProgressEvent) => {
          if (e.total && options?.onProgress) {
            options.onProgress(Math.round((e.loaded * 100) / e.total));
          }
        },
      })
    ),

  put: async <T>(
    url: string,
    payload?: any,
    options?: RequestOptions
  ): Promise<T> =>
    handleRequest(() =>
      axios.put<T>(url, payload, {
        headers: {
          ...defaultHeaders,
          ...(options?.authorization
            ? { Authorization: `Bearer ${options.authorization}` }
            : {}),
        },
        onUploadProgress: (e: AxiosProgressEvent) => {
          if (e.total && options?.onProgress) {
            options.onProgress(Math.round((e.loaded * 100) / e.total));
          }
        },
      })
    ),

  delete: async <T>(url: string, options?: RequestOptions): Promise<T> =>
    handleRequest(() =>
      axios.delete<T>(url, {
        headers: {
          ...defaultHeaders,
          ...(options?.authorization
            ? { Authorization: `Bearer ${options.authorization}` }
            : {}),
        },
        onDownloadProgress: (e: AxiosProgressEvent) => {
          if (e.total && options?.onProgress) {
            options.onProgress(Math.round((e.loaded * 100) / e.total));
          }
        },
      })
    ),
};
