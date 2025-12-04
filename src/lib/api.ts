import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});


api.interceptors.request.use((config) => {

  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  // if (!token) {
  //   window.location.href = "/admin/login";
  //   return Promise.reject("Sem token");
  // }

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;

});