"use client";
"use client";
import { cookies } from "next/headers";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

interface UserType {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: UserType | null;
  isAuthenticated: boolean;
  login: (token: string, userInfo: UserType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("access_token");
    const userId = Cookies.get("user_id");
    const username = Cookies.get("username");
    const email = Cookies.get("email");
    const role = Cookies.get("role");

    if (token && userId && username && role) {
      setUser({ id: userId, name: username, email: email || "", role });
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token: string, userInfo: UserType) => {
    // Set to localStorage
    localStorage.setItem("accessToken", token);
    localStorage.setItem("user", JSON.stringify(userInfo));

    // Set to cookies
    Cookies.set("access_token", token);
    Cookies.set("user_id", userInfo.id);
    Cookies.set("username", userInfo.name);
    Cookies.set("email", userInfo.email);
    Cookies.set("role", userInfo.role);

    setUser(userInfo);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    // Clear cookies
    Cookies.remove("access_token");
    Cookies.remove("user_id");
    Cookies.remove("username");
    Cookies.remove("email");
    Cookies.remove("role");

    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
