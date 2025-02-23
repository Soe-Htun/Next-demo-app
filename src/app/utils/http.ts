// import { getCookie } from "cookies-next";

// const COOKIE_ACCESS_TOKEN = "accessToken";
// const COOKIE_REFRESH_TOKEN = "refreshToken";

export async function useHttp<T>(
  url: string,
  options: RequestInit = {},
  token?: string | null | undefined
): Promise<T> {
//   const accessToken = getCookie(COOKIE_ACCESS_TOKEN);
  
  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (response.status === 401) {
    console.error("Unauthorized! Redirecting to login...");
  }

  return response.json();
}
