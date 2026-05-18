const API_URL = "http://localhost:8081";

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const saveToken = (token: string) => localStorage.setItem("auth_token", token);
export const getToken = (): string | null => localStorage.getItem("auth_token");
export const removeToken = () => localStorage.removeItem("auth_token");
export const isLoggedIn = (): boolean => !!getToken();

export const register = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Gagal register");
  saveToken(data.token);
  return data;
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Gagal login");
  saveToken(data.token);
  return data;
};

export const logout = () => {
  removeToken();
  window.location.href = "/";
};