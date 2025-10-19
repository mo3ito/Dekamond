// import axios, { AxiosError, AxiosProgressEvent } from "axios";

// const defaultHeaders = {
//   "Content-Type": "application/json",
// };

// export interface RequestOptions {
//   authorization?: string;
//   onProgress?: (progress: number) => void;
// }

// async function handleRequest<T>(
//   request: () => Promise<{ data: T }>
// ): Promise<T> {
//   try {
//     const data = await request();
//     return data.data;
//   } catch (error: unknown) {
//     if (error instanceof AxiosError && error.response) {
//       console.error("Request failed with status:", error.response.status);
//       console.error("Response data:", error.response.data);
//       throw new Error(error.response.data?.message || "Request failed");
//     }
//     throw new Error("An unknown error occurred");
//   }
// }

// export const apiClient = {
//   get: async <T>(url: string, options?: RequestOptions): Promise<T> =>
//     handleRequest(() =>
//       axios.get<T>(url, {
//         headers: {
//           ...defaultHeaders,
//           ...(options?.authorization
//             ? { Authorization: `Bearer ${options.authorization}` }
//             : {}),
//         },
//         onDownloadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && options?.onProgress) {
//             options.onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//     ),

//   post: async <T, P = unknown>(
//     url: string,
//     payload?: P,
//     options?: RequestOptions
//   ): Promise<T> =>
//     handleRequest(() =>
//       axios.post<T>(url, payload, {
//         headers: {
//           ...defaultHeaders,
//           ...(options?.authorization
//             ? { Authorization: `Bearer ${options.authorization}` }
//             : {}),
//         },
//         onUploadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && options?.onProgress) {
//             options.onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//     ),

//   put: async <T, P = unknown>(
//     url: string,
//     payload?: P,
//     options?: RequestOptions
//   ): Promise<T> =>
//     handleRequest(() =>
//       axios.put<T>(url, payload, {
//         headers: {
//           ...defaultHeaders,
//           ...(options?.authorization
//             ? { Authorization: `Bearer ${options.authorization}` }
//             : {}),
//         },
//         onUploadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && options?.onProgress) {
//             options.onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//     ),

//   delete: async <T>(url: string, options?: RequestOptions): Promise<T> =>
//     handleRequest(() =>
//       axios.delete<T>(url, {
//         headers: {
//           ...defaultHeaders,
//           ...(options?.authorization
//             ? { Authorization: `Bearer ${options.authorization}` }
//             : {}),
//         },
//         onDownloadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && options?.onProgress) {
//             options.onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//     ),
// };

// import axios, { AxiosError, AxiosProgressEvent } from "axios";

// const defaultHeaders = {
//   "Content-Type": "application/json",
// };

// export interface RequestOptions {
//   authorization?: string;
//   onProgress?: (progress: number) => void;
// }

// async function handleRequest<T>(
//   request: () => Promise<{ data: T }>
// ): Promise<T> {
//   try {
//     const data = await request();
//     return data.data;
//   } catch (error: unknown) {
//     if (error instanceof AxiosError && error.response) {
//       console.error("Request failed with status:", error.response.status);
//       console.error("Response data:", error.response.data);
//       throw new Error(error.response.data?.message || "Request failed");
//     }
//     throw new Error("An unknown error occurred");
//   }
// }


// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     console.log("Request sent:", config);
//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {

//     console.log("Response received:", response);
//     return response;
//   },
//   (error) => {

//     if (error.response && error.response.status === 401) {
//       console.error("Unauthorized! Token might be expired.");
//     }
//     console.error("Response error:", error);
//     return Promise.reject(error);
//   }
// );

// export const apiClient = {
//   get: async <T>(url: string, options?: RequestOptions): Promise<T> =>
//     handleRequest(() =>
//       axios.get<T>(url, {
//         headers: {
//           ...defaultHeaders,
//           ...(options?.authorization
//             ? { Authorization: `Bearer ${options.authorization}` }
//             : {}),
//         },
//         onDownloadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && options?.onProgress) {
//             options.onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//     ),

//   post: async <T, P = unknown>(
//     url: string,
//     payload?: P,
//     options?: RequestOptions
//   ): Promise<T> =>
//     handleRequest(() =>
//       axios.post<T>(url, payload, {
//         headers: {
//           ...defaultHeaders,
//           ...(options?.authorization
//             ? { Authorization: `Bearer ${options.authorization}` }
//             : {}),
//         },
//         onUploadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && options?.onProgress) {
//             options.onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//     ),

//   put: async <T, P = unknown>(
//     url: string,
//     payload?: P,
//     options?: RequestOptions
//   ): Promise<T> =>
//     handleRequest(() =>
//       axios.put<T>(url, payload, {
//         headers: {
//           ...defaultHeaders,
//           ...(options?.authorization
//             ? { Authorization: `Bearer ${options.authorization}` }
//             : {}),
//         },
//         onUploadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && options?.onProgress) {
//             options.onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//     ),

//   delete: async <T>(url: string, options?: RequestOptions): Promise<T> =>
//     handleRequest(() =>
//       axios.delete<T>(url, {
//         headers: {
//           ...defaultHeaders,
//           ...(options?.authorization
//             ? { Authorization: `Bearer ${options.authorization}` }
//             : {}),
//         },
//         onDownloadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && options?.onProgress) {
//             options.onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//     ),
// };


// import axios, { AxiosError, AxiosProgressEvent } from "axios";

// const API_BASE_URL = "https://your-api-url.com"; 


// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


// const getAccessToken = () => localStorage.getItem("accessToken");
// const getRefreshToken = () => localStorage.getItem("refreshToken");

// const saveTokens = (accessToken: string, refreshToken?: string) => {
//   localStorage.setItem("accessToken", accessToken);
//   if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
// };

// const clearTokens = () => {
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
// };


// const refreshAccessToken = async (): Promise<string> => {
//   const refreshToken = getRefreshToken();
//   if (!refreshToken) throw new Error("No refresh token available");

//   try {
//     const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
//       refreshToken,
//     });

//     const { accessToken, refreshToken: newRefreshToken } = response.data;
//     saveTokens(accessToken, newRefreshToken);
//     return accessToken;
//   } catch (error) {
//     clearTokens();
//     throw new Error("Session expired. Please log in again.");
//   }
// };


// let isRefreshing = false;
// let failedQueue: any[] = [];

// const processQueue = (error: any, token: string | null = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) prom.reject(error);
//     else prom.resolve(token);
//   });
//   failedQueue = [];
// };


// api.interceptors.request.use(
//   (config) => {
//     const token = getAccessToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );


// api.interceptors.response.use(
//   (response) => response, 
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {

//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers.Authorization = `Bearer ${token}`;
//             return api(originalRequest);
//           })
//           .catch((err) => Promise.reject(err));
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         const newToken = await refreshAccessToken();
//         processQueue(null, newToken);
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return api(originalRequest); // درخواست اصلی دوباره ارسال می‌شود
//       } catch (err) {
//         processQueue(err, null);
//         clearTokens();
//         // می‌تونی در اینجا کاربر را به صفحه لاگین هدایت کنی
//         window.location.href = "/login";
//         return Promise.reject(err);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );


// export const apiClient = {
//   get: <T>(url: string, onProgress?: (p: number) => void) =>
//     api
//       .get<T>(url, {
//         onDownloadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && onProgress) {
//             onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//       .then((res) => res.data),

//   post: <T, P = unknown>(
//     url: string,
//     payload?: P,
//     onProgress?: (p: number) => void
//   ) =>
//     api
//       .post<T>(url, payload, {
//         onUploadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && onProgress) {
//             onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//       .then((res) => res.data),

//   put: <T, P = unknown>(
//     url: string,
//     payload?: P,
//     onProgress?: (p: number) => void
//   ) =>
//     api
//       .put<T>(url, payload, {
//         onUploadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && onProgress) {
//             onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//       .then((res) => res.data),

//   delete: <T>(url: string, onProgress?: (p: number) => void) =>
//     api
//       .delete<T>(url, {
//         onDownloadProgress: (e: AxiosProgressEvent) => {
//           if (e.total && onProgress) {
//             onProgress(Math.round((e.loaded * 100) / e.total));
//           }
//         },
//       })
//       .then((res) => res.data),
// };

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosProgressEvent,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

const getAccessToken = () => Cookies.get("accessToken");
const getRefreshToken = () => Cookies.get("refreshToken");

const saveTokens = (accessToken: string, refreshToken?: string) => {
  Cookies.set("accessToken", accessToken, { secure: true, sameSite: "Strict" });
  if (refreshToken)
    Cookies.set("refreshToken", refreshToken, { secure: true, sameSite: "Strict" });
};

const clearTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

/* ---------------------- 🔁 رفرش توکن ---------------------- */
const refreshAccessToken = async (baseURL: string): Promise<string> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error("No refresh token available");

  try {
    const response = await axios.post(`${baseURL}/auth/refresh`, { refreshToken });
    const { accessToken, refreshToken: newRefreshToken } = response.data;
    saveTokens(accessToken, newRefreshToken);
    return accessToken;
  } catch (error) {
    clearTokens();
    throw new Error("Session expired. Please log in again.");
  }
};

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

export const createApiClient = (API_BASE_URL: string) => {
  const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });

  /* ---------------------- 📤 interceptor درخواست ---------------------- */
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig & { isAuth?: boolean }) => {
      if (config.isAuth) {
        const token = getAccessToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  /* ---------------------- 📥 interceptor پاسخ ---------------------- */
  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError & { config: any }) => {
      const originalRequest = error.config;

      if (originalRequest.isAuth && error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return api(originalRequest);
            })
            .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const newToken = await refreshAccessToken(API_BASE_URL);
          processQueue(null, newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        } catch (err) {
          processQueue(err, null);
          clearTokens();
          window.location.href = "/login";
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  /* ---------------------- 🧱 متدهای CRUD ---------------------- */
  const requestWrapper = <T>(
    method: "get" | "post" | "put" | "delete",
    url: string,
    payload?: any,
    onProgress?: (p: number) => void,
    isAuth: boolean = true
  ) => {
    const config: any = { isAuth };

    if (method === "get" || method === "delete") {
      if (onProgress) {
        config.onDownloadProgress = (e: AxiosProgressEvent) => {
          if (e.total) onProgress(Math.round((e.loaded * 100) / e.total));
        };
      }
      return api[method]<T>(url, config).then((res) => res.data);
    }

    if (method === "post" || method === "put") {
      if (onProgress) {
        config.onUploadProgress = (e: AxiosProgressEvent) => {
          if (e.total) onProgress(Math.round((e.loaded * 100) / e.total));
        };
      }
      return api[method]<T>(url, payload, config).then((res) => res.data);
    }

    throw new Error("Invalid method");
  };

  return {
    get: <T>(url: string, onProgress?: (p: number) => void, isAuth: boolean = true) =>
      requestWrapper<T>("get", url, undefined, onProgress, isAuth),

    post: <T, P = unknown>(
      url: string,
      payload?: P,
      onProgress?: (p: number) => void,
      isAuth: boolean = true
    ) => requestWrapper<T>("post", url, payload, onProgress, isAuth),

    put: <T, P = unknown>(
      url: string,
      payload?: P,
      onProgress?: (p: number) => void,
      isAuth: boolean = true
    ) => requestWrapper<T>("put", url, payload, onProgress, isAuth),

    delete: <T>(url: string, onProgress?: (p: number) => void, isAuth: boolean = true) =>
      requestWrapper<T>("delete", url, undefined, onProgress, isAuth),
  };
};


const apiClient = createApiClient(import.meta.env.VITE_API_URL);

// درخواست با AccessToken و RefreshToken
apiClient.get("/users", undefined, true);

// درخواست بدون هیچ توکنی
apiClient.get("/public/data", undefined, false);

// POST با توکن
apiClient.post("/posts", { title: "Hello" }, undefined, true);