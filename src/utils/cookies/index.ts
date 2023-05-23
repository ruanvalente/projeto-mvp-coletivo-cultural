import Cookies from "js-cookie";

export type CookieProps = {
  token: string;
  user: {
    aud: string;
    email: string;
  };
};

export const setCookie = (key: string, value: string, options?: any) => {
  Cookies.set(key, value, options);
};

export const getCookie = (key: string) => {
  const cookieKey = Cookies.get(key);

  if (cookieKey) {
    return JSON.parse(cookieKey);
  }
};

export const removeCookie = (key: string) => {
  Cookies.remove(key);
};
