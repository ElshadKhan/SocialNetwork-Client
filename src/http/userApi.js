import jwtDecode from "jwt-decode";
import { $host, $authHost } from "./index";

export const registration = async (email, password, username) => {
  const { data } = await $host.post("api/user/regist", {
    email,
    password,
    username,
    role: "USER",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const deleteUser = async (id) => {
  const { data } = await $authHost.delete(`api/user/delete/${id}`);
  return data;
};
export const updateUserLogin = async (id, username) => {
  const { data } = await $authHost.put(`api/user/update/${id}`, { username });
  return data;
};
